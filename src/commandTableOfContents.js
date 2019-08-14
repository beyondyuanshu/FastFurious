import sketch from "sketch";
import {
  getPagePosterities,
  getHeadingLevel,
  getHeading,
  isTopLayer
} from "./lib/Utilities";
import { TocPageName } from "./lib/Constants";

let Sketch = require("sketch");
let Page = require("sketch/dom").Page;
let Artboard = require("sketch/dom").Artboard;
let Group = require("sketch/dom").Group;
let Text = require("sketch/dom").Text;

let document = require("sketch/dom").getSelectedDocument();

function getTocPage() {
  let pages = document.pages;
  for (let page of pages) {
    if (page.name === TocPageName) {
      return page;
    }
  }

  return undefined;
}

function getFontSize(level) {
  if (level === 1) {
    return 60;
  } else if (level === 2) {
    return 50;
  } else if (level === 3) {
    return 40;
  } else if (level === 4) {
    return 30;
  } else if (level === 5) {
    return 30;
  } else if (level === 6) {
    return 30;
  }
}

function createHeading(artboard, serialIdx, pageIdx, layer) {
  let heading = getHeading(layer);
  let headingLevel = getHeadingLevel(layer);

  // init group
  let leftRect = new Text({
    text: "",
    name: "Left Space"
  });
  leftRect.frame = { x: 0, y: 0, width: 50, heigth: 100 };
  let rightRect = new Text({
    text: "",
    name: "Right Space"
  });
  rightRect.frame = { x: 950, y: 0, width: 50, heigth: 100 }; // NOTE: height 在此处并不生效！

  let group = new Group({
    parent: artboard,
    name: serialIdx
  });
  group.adjustToFit();

  let serialAndContent = new Text({
    text: serialIdx + " " + heading, // NOTE: list text first! text maybe change the name
    name: "Serial and Content",
    style: {
      borders: [],
      fontFamily: "平方-简",
      fontSize: getFontSize(headingLevel),
      textColor: "#000000",
      alignment: "left",
      verticalAlignment: "center"
    }
  });

  let combinator = new Text({
    text: "......................",
    name: "Combinator",
    style: {
      borders: [],
      fontFamily: "平方-简",
      fontSize: 40,
      textColor: "#000000",
      alignment: "left",
      verticalAlignment: "center"
    }
  });

  let pageNumber = new Text({
    text: pageIdx.toString(),
    name: "Page Number",
    style: {
      borders: [],
      fontFamily: "平方-简",
      fontSize: 40,
      textColor: "#000000",
      alignment: "right",
      verticalAlignment: "center"
    }
  });

  group.frame = { x: 0, width: 1000, height: 100 };

  serialAndContent.frame = {
    x: 50 * headingLevel,
    y: (group.frame.height - serialAndContent.frame.height) / 2
  };

  let text = "";
  let combinatorWidth =
    800 - serialAndContent.frame.x - serialAndContent.frame.width;
  for (let i = 0; i < combinatorWidth / 11; ++i) {
    text += ".";
    combinator.text = text;
    if (combinator.frame.width >= combinatorWidth) {
      break;
    }
  }
  combinator.name = "Combinator"; // NOTE: 设置 text 后需要恢复 name!

  combinator.fixedWidth = true;
  combinator.frame = {
    x: serialAndContent.frame.x + serialAndContent.frame.width + 50,
    y: (group.frame.height - combinator.frame.height) / 2,
    width: combinatorWidth
  };
  combinator.style.alignment = "right";

  pageNumber.fixedWidth = true;
  pageNumber.frame = {
    x: 850,
    y: (group.frame.height - pageNumber.frame.height) / 2,
    width: 100
  };

  group.layers = [
    leftRect,
    serialAndContent,
    combinator,
    pageNumber,
    rightRect
  ];

  return group;
}

export default function() {
  // get layers
  let pages = document.pages;
  let layers = [];
  for (let page of pages) {
    if (page.isSymbolsPage() || page.name === TocPageName) continue;
    let list = getPagePosterities(page);
    layers = layers.concat(list);
  }
  if (layers.length === 0) {
    console.log("Have no layers in the document.");
    return;
  }

  // get headings for a map(layer, pageIdx)
  let headingsMap = new Map();
  let pageIdx = 0;
  layers.forEach(layer => {
    if (isTopLayer(layer)) ++pageIdx;
    if (!layer.name.startsWith("#")) return;
    headingsMap.set(layer, pageIdx);
  });
  if (headingsMap.size === 0) {
    console.log("Have no layers as headings.");
    return;
  }

  // check TOC page
  let tocPage = getTocPage();
  if (tocPage === undefined) {
    tocPage = new Page({ parent: document, name: TocPageName });
    pages.unshift(tocPage);
  }
  tocPage.layers = [];

  // add headings
  let artboard;
  let serial = "";
  let idx = -1;
  for (let [layer, pageIdx] of headingsMap) {
    ++idx;

    // create artboard
    if (idx % 9 === 0) {
      artboard = new Artboard({
        parent: tocPage,
        name: "Contents " + parseInt(idx / 9 + 1),
        frame: { x: 50, y: 50 + 1050 * (idx / 9), width: 1000, height: 1000 }
      });
    }

    let level = getHeadingLevel(layer);
    let serialList = serial.split(".");
    if (serialList.length < level - 1) {
      --idx;
      console.log("Invalid heading flag.");
      continue;
    }

    if (serialList[0] === "") {
      serialList[0] = 1;
    } else if (serialList.length >= level) {
      serialList[level - 1] = parseInt(serialList[level - 1]) + 1;
      serialList = serialList.slice(0, level);
    } else {
      serialList.push(1);
    }
    serial = serialList.join(".");

    // create headings
    let group = createHeading(artboard, serial, pageIdx, layer);
    group.frame.y = 50 + group.frame.height * (idx % 9);
  }

  Sketch.UI.message("Successfully! 🙌");
}
