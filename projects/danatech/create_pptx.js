const pptxgen = require('pptxgenjs');

let pptx = new pptxgen();

// Define Brand Colors
const BRAND_RED = "E30613";
const BRAND_BROWN = "51361A";
const TEXT_WHITE = "FFFFFF";

// Slide 1: Title Slide (Trang Tiêu Đề)
let slide1 = pptx.addSlide();
slide1.background = { fill: BRAND_RED };

slide1.addText("DANATECH", {
    x: 1, y: 1.5, w: 8, h: 1,
    fontSize: 60,
    bold: true,
    color: TEXT_WHITE,
    align: "center",
    fontFace: "Arial"
});

slide1.addText("Gia Công Chuẩn Xác - Hợp Tác Vững Bền\nPrecision Processing - Sustainable Partnership", {
    x: 1, y: 3.0, w: 8, h: 1.5,
    fontSize: 28,
    color: TEXT_WHITE,
    align: "center",
    fontFace: "Arial",
    italic: true
});

slide1.addText("A member of HGPT Steel", {
    x: 1, y: 5.0, w: 8, h: 0.5,
    fontSize: 18,
    color: TEXT_WHITE,
    align: "center",
    fontFace: "Arial"
});

// Slide 2: Products & Expertise (Sản Phẩm & Năng Lực)
let slide2 = pptx.addSlide();

slide2.addText("DANH MỤC SẢN PHẨM / PRODUCT PORTFOLIO", {
    x: 0.5, y: 0.5, w: 9, h: 0.8,
    fontSize: 32,
    bold: true,
    color: BRAND_RED,
    fontFace: "Arial"
});

slide2.addShape(pptx.ShapeType.line, { x: 0.5, y: 1.3, w: 9, h: 0, line: { color: BRAND_BROWN, width: 2 } });

const products = [
    { vi: "Cán Tôn - Tấm Lợp", en: "Metal Roofing Sheets" },
    { vi: "Xà Gồ C & Z", en: "Steel Purlins (C & Z)" },
    { vi: "Thép Hình Các Loại (H, I, U, V)", en: "Shaped Steel (H, I, U, V sections)" },
    { vi: "Cắt/Uốn Thép Chính Xác", en: "Precision Steel Cutting & Bending" }
];

products.forEach((prod, index) => {
    slide2.addText(`• ${prod.vi}`, {
        x: 1, y: 1.8 + (index * 0.9), w: 4, h: 0.5,
        fontSize: 20,
        color: BRAND_BROWN,
        bold: true,
        fontFace: "Arial"
    });
    slide2.addText(`  ${prod.en}`, {
        x: 1, y: 2.2 + (index * 0.9), w: 4, h: 0.3,
        fontSize: 16,
        color: BRAND_BROWN,
        fontFace: "Arial",
        italic: true
    });
});

// Slide 3: Partner with Us (Đối Tác Đồng Hành)
let slide3 = pptx.addSlide();
slide3.background = { fill: BRAND_BROWN };

slide3.addText("SUCCESS TOGETHER", {
    x: 1, y: 1.5, w: 8, h: 1,
    fontSize: 44,
    bold: true,
    color: TEXT_WHITE,
    align: "center",
    fontFace: "Arial"
});

slide3.addText("HGPT Steel & Danatech Group", {
    x: 1, y: 2.5, w: 8, h: 0.5,
    fontSize: 24,
    color: TEXT_WHITE,
    align: "center",
    fontFace: "Arial"
});

slide3.addShape(pptx.ShapeType.rect, { x: 2, y: 3.5, w: 6, h: 1.5, fill: { color: BRAND_RED } });

slide3.addText("Liên hệ: sales.danatech@gmail.com\nHotline: 085 782 8682", {
    x: 2, y: 3.6, w: 6, h: 1.3,
    fontSize: 20,
    color: TEXT_WHITE,
    align: "center",
    fontFace: "Arial"
});

slide3.addText("Address: Đường số 8, KCN Hòa Cầm, Cẩm Lệ, Đà Nẵng", {
    x: 1, y: 5.2, w: 8, h: 0.4,
    fontSize: 14,
    color: TEXT_WHITE,
    align: "center",
    fontFace: "Arial"
});

// Save the Presentation
pptx.writeFile({ fileName: "Danatech_Introduction.pptx" }).then(fileName => {
    console.log(`Presentation created: ${fileName}`);
});
