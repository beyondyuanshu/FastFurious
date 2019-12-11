#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import sys
from PyPDF2 import PdfFileWriter, PdfFileReader

# set code for pdf outline
reload(sys)
sys.setdefaultencoding('utf-8')

args = sys.argv[1:]
if len(args) >= 2:
    filePath = args[0]
    reader = PdfFileReader(filePath)
    output = PdfFileWriter()

    # add pages to output
    pageNums = reader.getNumPages()
    pageNum = 0
    while pageNum < pageNums:
        output.addPage(reader.getPage(pageNum))
        pageNum = pageNum + 1

    # get contents
    contents = args[1]
    contents = eval(contents)

    # add links/bookmarks
    if pageNums >= 3:
        output.addBookmark(u'封面', 0)
        output.addBookmark(u"1.历史记录", 1)
        parent = output.addBookmark(u"2.目录", 2)
        for content in contents:
            # output.addLink(2, int(content[1]), content[2])
            # output.addLink(0, 3, [0, 0, 500, 500], [1, 0, 0])
            output.addBookmark(
                unicode(content[0], "utf-8"), int(content[1]), parent)

        output.addBookmark(u"封底", pageNums - 1)

    # output
    output.write(open(filePath, "wb"))
