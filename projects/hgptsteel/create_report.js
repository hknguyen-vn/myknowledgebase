const {
    Document,
    Packer,
    Paragraph,
    TextRun,
    Table,
    TableRow,
    TableCell,
    AlignmentType,
    BorderStyle,
    WidthType,
    VerticalAlign,
    ShadingType,
    UnderlineType,
    SymbolRun,
    LevelFormat
} = require('docx');
const fs = require('fs');

// Constants for styling
const BRAND_RED = "E30613";
const BRAND_BLUE = "2E75B6";
const TABLE_BORDER = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const CELL_BORDERS = { top: TABLE_BORDER, bottom: TABLE_BORDER, left: TABLE_BORDER, right: TABLE_BORDER };

const doc = new Document({
    styles: {
        default: {
            document: {
                run: { font: "Arial", size: 24 } // 12pt
            }
        },
        paragraphStyles: [
            {
                id: "ProjectTitle",
                name: "Project Title",
                run: { size: 32, bold: true, color: BRAND_RED, font: "Arial" },
                paragraph: { spacing: { before: 240, after: 240 } }
            },
            {
                id: "ReportHeading",
                name: "Report Heading",
                run: { size: 28, bold: true, color: BRAND_BLUE, underline: { type: UnderlineType.SINGLE } },
                paragraph: { spacing: { before: 200, after: 120 } }
            }
        ]
    },
    numbering: {
        config: [
            {
                reference: "task-list",
                levels: [{
                    level: 0,
                    format: LevelFormat.BULLET,
                    text: "•",
                    alignment: AlignmentType.LEFT,
                    style: { paragraph: { indent: { left: 720, hanging: 360 } } }
                }]
            }
        ]
    },
    sections: [{
        properties: {
            page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
        },
        children: [
            // Title
            new Paragraph({
                style: "ProjectTitle",
                children: [new TextRun("Công trình: LSX041.25-BKM-KCT Nhà xưởng C1")]
            }),

            // Weather Section
            new Paragraph({
                style: "ReportHeading",
                children: [new TextRun("Thời tiết")]
            }),
            new Paragraph({
                children: [
                    new TextRun("Buổi sáng: "),
                    new SymbolRun({ char: "F070", font: "Wingdings" }), // Checked symbol
                    new TextRun(" Nắng      "),
                    new SymbolRun({ char: "F0A1", font: "Wingdings" }), // Unchecked circle symbol (approx)
                    new TextRun(" Mưa")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun("Buổi chiều: "),
                    new SymbolRun({ char: "F070", font: "Wingdings" }),
                    new TextRun(" Nắng      "),
                    new SymbolRun({ char: "F0A1", font: "Wingdings" }),
                    new TextRun(" Mưa")
                ]
            }),

            // Personnel Table
            new Paragraph({
                style: "ReportHeading",
                children: [new TextRun("Nhân sự")]
            }),
            new Table({
                columnWidths: [3120, 3120, 3120],
                margins: { top: 100, bottom: 100, left: 180, right: 180 },
                rows: [
                    new TableRow({
                        tableHeader: true,
                        children: [
                            new TableCell({
                                borders: CELL_BORDERS,
                                shading: { fill: "F2F2F2", type: ShadingType.CLEAR },
                                children: [new Paragraph({ children: [new TextRun({ text: "Nhân sự", bold: true })] })]
                            }),
                            new TableCell({
                                borders: CELL_BORDERS,
                                shading: { fill: "F2F2F2", type: ShadingType.CLEAR },
                                children: [new Paragraph({ children: [new TextRun({ text: "Số lượng", bold: true })] })]
                            }),
                            new TableCell({
                                borders: CELL_BORDERS,
                                shading: { fill: "F2F2F2", type: ShadingType.CLEAR },
                                children: [new Paragraph({ children: [new TextRun({ text: "Đơn giá", bold: true })] })]
                            })
                        ]
                    }),
                    new TableRow({
                        children: [
                            new TableCell({
                                borders: CELL_BORDERS,
                                children: [new Paragraph({ children: [new TextRun("Nhân sự HGPT")] })]
                            }),
                            new TableCell({
                                borders: CELL_BORDERS,
                                children: [new Paragraph({ children: [new TextRun("2")] })]
                            }),
                            new TableCell({
                                borders: CELL_BORDERS,
                                children: [new Paragraph({ children: [new TextRun("")] })]
                            })
                        ]
                    })
                ]
            }),

            // Summary of Work
            new Paragraph({
                style: "ReportHeading",
                children: [new TextRun("Tóm tắt công việc hôm nay")]
            }),
            new Paragraph({
                children: [new TextRun("Lắp đặt cửa và ti giằng mái")]
            }),

            // Future Plan
            new Paragraph({
                style: "ReportHeading",
                children: [new TextRun("Dự kiến công việc ngày mai")]
            }),
            new Paragraph({
                children: [new TextRun("Lắp đặt cửa và ti giằng mái")]
            }),

            // Issues
            new Paragraph({
                style: "ReportHeading",
                children: [new TextRun("Vấn đề công trình")]
            }),
            new Paragraph({
                children: [new TextRun("")]
            })
        ]
    }]
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync("f:/MyKnowledgeBase/projects/hgptsteel/Bao_cao_Tong_ket_2025.docx", buffer);
    console.log("Document created successfully.");
});
