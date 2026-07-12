const branches = [
    {
        title: "¿QUÉ ES EL PSICOANÁLISIS?", color: "#4C9AFF", icon: "🧠",
        pos: { x: -720, y: -700 }, leafMode: "leftColumn",
        items: [
            ["Método de observación", "Investiga la mente humana para comprender y explicar su funcionamiento."],
            ["Técnica terapéutica", "Aborda trastornos psíquicos y conflictos internos mediante la palabra."],
            ["Teoría de la personalidad", "Explica el funcionamiento mental, la conducta y el desarrollo de la personalidad."],
            ["Objetivo", "No da consejos: busca que la persona comprenda el origen inconsciente de sus conflictos."],
            ["Origen", "Creado por Sigmund Freud a partir del estudio de la histeria y de los límites de la hipnosis."]
        ]
    },
    {
        title: "EL INCONSCIENTE", color: "#5CC65C", icon: "🌙",
        pos: { x: 0, y: -760 }, leafMode: "topGrid",
        items: [
            ["Concepto central", "Gran parte de la conducta, emociones y conflictos está determinada por procesos no conscientes."],
            ["Sueños", "Expresan deseos, conflictos y contenidos inconscientes de manera simbólica."],
            ["Lapsus", "Errores del lenguaje que pueden revelar asociaciones ocultas."],
            ["Actos fallidos", "Acciones aparentemente accidentales relacionadas con deseos o conflictos inconscientes."],
            ["Síntomas", "Manifestaciones psicológicas o corporales que expresan conflictos reprimidos."],
            ["Primera tópica", "Consciente, preconsciente e inconsciente."]
        ]
    },
    {
        title: "TÉCNICAS FUNDAMENTALES", color: "#9B5DE5", icon: "💬",
        pos: { x: 720, y: -700 }, leafMode: "rightColumn",
        items: [
            ["Asociación libre", "El paciente expresa todo lo que pasa por su mente sin censura."],
            ["Transferencia", "Proyecta sobre el terapeuta sentimientos originalmente dirigidos hacia figuras importantes de la infancia."],
            ["Interpretación", "El analista relaciona sueños, síntomas, lapsus y discurso con conflictos inconscientes."],
            ["Resistencia", "Fuerzas que dificultan reconocer contenidos dolorosos o amenazantes."],
            ["Insight", "Comprensión profunda del significado emocional de un conflicto."]
        ]
    },
    {
        title: "LA ANGUSTIA", color: "#2DB7B5", icon: "◔",
        pos: { x: -760, y: 0 }, leafMode: "leftColumn",
        items: [
            ["Señal de peligro", "Aparece cuando el Yo percibe amenazas internas o externas que no puede controlar."],
            ["Origen", "Puede surgir por impulsos del Ello, exigencias del Superyó o demandas de la realidad."],
            ["Angustia primaria", "Experiencia temprana de desbordamiento ante estímulos que el bebé aún no puede manejar."],
            ["Tolerancia", "Capacidad para soportar frustración, postergar impulsos y regular respuestas."],
            ["Síntoma", "Si las defensas son insuficientes, el conflicto puede expresarse como neurosis o síntomas."]
        ]
    },
    {
        title: "PULSIONES E INSTINTOS", color: "#FF8F3D", icon: "♥",
        pos: { x: 760, y: 0 }, leafMode: "rightColumn",
        items: [
            ["Eros", "Pulsión de vida: amor, sexualidad, creatividad y conservación."],
            ["Thánatos", "Pulsión de muerte: agresividad, destrucción y tendencia a la descarga extrema."],
            ["Libido", "Energía sexual y afectiva que impulsa el deseo, los vínculos y la creatividad."],
            ["Catexis", "Depósito o inversión de libido en personas, ideas, actividades u objetos."],
            ["Dinámica psíquica", "La conducta surge del conflicto y equilibrio entre fuerzas de vida y destrucción."]
        ]
    },
    {
        title: "MECANISMOS DE DEFENSA", color: "#5DA9E9", icon: "◆",
        pos: { x: -760, y: 760 }, leafMode: "leftGrid",
        items: [
            ["Represión", "Mantiene fuera de la conciencia deseos o pensamientos inaceptables."],
            ["Negación", "Rechaza una realidad dolorosa o amenazante."],
            ["Proyección", "Atribuye a otros sentimientos o impulsos propios."],
            ["Introyección", "Incorpora cualidades, normas o valores de otras personas."],
            ["Sublimación", "Transforma impulsos en actividades socialmente valiosas como arte, ciencia o trabajo."],
            ["Formación reactiva", "Expresa una conducta opuesta al impulso original."],
            ["Racionalización", "Justifica con razones lógicas una motivación emocional más profunda."],
            ["Regresión", "Retorna a conductas de etapas anteriores ante estrés o conflicto."],
            ["Desplazamiento", "Dirige el afecto hacia un objeto o persona menos amenazante."],
            ["Compensación", "Desarrolla un área para contrarrestar frustraciones o sentimientos de insuficiencia."],
            ["Fantasía", "Satisface imaginariamente deseos difíciles de realizar."]
        ]
    },
    {
        title: "ESTRUCTURA PSÍQUICA", color: "#F2B632", icon: "✦",
        pos: { x: 0, y: 650 }, leafMode: "bottomGrid",
        items: [
            ["Ello", "Polo instintivo e inconsciente. Busca satisfacción inmediata y se guía por el principio del placer."],
            ["Yo", "Mediador entre Ello, Superyó y realidad. Regula impulsos y se guía por el principio de realidad."],
            ["Superyó", "Interioriza normas, valores e ideales. Genera culpa, exigencia y conciencia moral."],
            ["Conflicto", "La personalidad se organiza mediante la negociación entre estas tres instancias."]
        ]
    },
    {
        title: "DESARROLLO PSICOSEXUAL", color: "#F64E8B", icon: "♟",
        pos: { x: 760, y: 760 }, leafMode: "rightGrid",
        items: [
            ["Oral · 0–2 años", "La boca es la zona de placer. Succión, alimentación, dependencia e incorporación."],
            ["Anal · 2–4 años", "Control de esfínteres, autonomía, limpieza, orden, retención y expulsión."],
            ["Fálica · 3–6 años", "Interés genital, complejo de Edipo, identificación y formación inicial del Superyó."],
            ["Latencia", "La energía se dirige al aprendizaje, amistades, juego y vida escolar."],
            ["Genital", "Desde la pubertad se reorganiza la sexualidad hacia formas más maduras."],
            ["Fijación", "La libido puede quedar detenida en una etapa e influir en la personalidad adulta."]
        ]
    },
    {
        title: "TERAPIA PSICOANALÍTICA", color: "#70C653", icon: "✚",
        pos: { x: 0, y: 1270 }, leafMode: "bottomGrid",
        items: [
            ["Meta principal", "Hacer consciente lo inconsciente y comprender el origen de los síntomas."],
            ["Trabajo clínico", "Analiza asociación libre, sueños, resistencias, transferencia y mecanismos de defensa."],
            ["Conflictos infantiles", "Relaciona experiencias tempranas con patrones actuales de conducta y vínculo."],
            ["Catarsis", "Liberación emocional al expresar y elaborar recuerdos o afectos reprimidos."],
            ["Contratransferencia", "Reacciones emocionales del terapeuta frente al paciente."],
            ["Resultado esperado", "Mayor comprensión, elaboración de conflictos y disminución de síntomas."]
        ]
    }
];

const svg = d3.select("#map");
const scene = svg.append("g").attr("id", "scene");
const linksLayer = scene.append("g");
const nodesLayer = scene.append("g");

const zoom = d3.zoom()
    .scaleExtent([0.18, 3.2])
    .on("zoom", e => scene.attr("transform", e.transform));

svg.call(zoom);

const center = { x: 0, y: 0, w: 460, h: 230 };
const branchSize = { w: 310, h: 98 };
const leafSize = { w: 285, h: 90 };

function rect(g, x, y, w, h, r, cls, stroke, filter) {
    const element = g.append("rect")
        .attr("x", x - w / 2).attr("y", y - h / 2)
        .attr("width", w).attr("height", h)
        .attr("rx", r).attr("ry", r)
        .attr("class", cls)
        .attr("stroke", stroke || "none");
    if (filter) element.attr("filter", filter);
    return element;
}

function cubic(a, b) {
    const dx = (b.x - a.x) * .5;
    return `M${a.x},${a.y} C${a.x + dx},${a.y} ${b.x - dx},${b.y} ${b.x},${b.y}`;
}

function centerEdge(branch) {
    const p = branch.pos, dx = p.x, dy = p.y;
    if (Math.abs(dx) > Math.abs(dy)) return { x: Math.sign(dx) * center.w / 2, y: dy * .08 };
    return { x: dx * .08, y: Math.sign(dy) * center.h / 2 };
}

function branchEdge(branch) {
    const p = branch.pos, a = centerEdge(branch);
    if (Math.abs(p.x - a.x) > Math.abs(p.y - a.y)) return { x: p.x - Math.sign(p.x - a.x) * branchSize.w / 2, y: p.y };
    return { x: p.x, y: p.y - Math.sign(p.y - a.y) * branchSize.h / 2 };
}

function wrapText(selection, text, maxChars, lineHeight, x, y, maxLines = 4) {
    const words = text.split(/\s+/);
    const lines = [];
    let line = "";
    words.forEach(word => {
        const test = (line + " " + word).trim();
        if (test.length > maxChars && line) {
            lines.push(line);
            line = word;
        } else line = test;
    });
    if (line) lines.push(line);

    const visible = lines.slice(0, maxLines);
    if (lines.length > maxLines) {
        visible[maxLines - 1] = visible[maxLines - 1].replace(/[.,;:]?$/, "") + "…";
    }

    visible.forEach((value, i) => {
        selection.append("tspan")
            .attr("x", x)
            .attr("y", y + i * lineHeight)
            .text(value);
    });
}

function drawCenter() {
    const g = nodesLayer.append("g");
    rect(g, 0, 0, center.w, center.h, 58, "center-card", null, "url(#centerShadow)");
    g.append("text").attr("x", 0).attr("y", -68).attr("font-size", 32).attr("text-anchor", "middle").text("🧠");

    const t = g.append("text").attr("class", "center-title");
    t.append("tspan").attr("x", 0).attr("y", -15).text("CONCEPTOS BÁSICOS");
    t.append("tspan").attr("x", 0).attr("y", 25).text("DE PSICOANÁLISIS");

    g.append("text")
        .attr("class", "center-subtitle")
        .attr("x", 0).attr("y", 83)
        .text("FUNDAMENTOS DE LA TEORÍA DE SIGMUND FREUD");
}

function branchTitleLines(title) {
    const words = title.split(/\s+/);
    const lines = [""];
    words.forEach(word => {
        const i = lines.length - 1;
        if ((lines[i] + " " + word).trim().length <= 21) lines[i] = (lines[i] + " " + word).trim();
        else lines.push(word);
    });
    return lines.slice(0, 2);
}

function leafPositions(branch) {
    const p = branch.pos, n = branch.items.length, W = leafSize.w, H = leafSize.h, gapX = 24, gapY = 18;

    if (branch.leafMode === "leftColumn" || branch.leafMode === "rightColumn") {
        const dir = branch.leafMode === "leftColumn" ? -1 : 1;
        const x = p.x + dir * (branchSize.w / 2 + W / 2 + 140);
        const total = n * H + (n - 1) * gapY;
        const y0 = p.y - total / 2 + H / 2;
        return branch.items.map((_, i) => ({ x, y: y0 + i * (H + gapY) }));
    }

    if (branch.leafMode === "topGrid") {
        const cols = 3, rows = Math.ceil(n / cols);
        const totalW = cols * W + (cols - 1) * gapX;
        const x0 = p.x - totalW / 2 + W / 2;
        const y0 = p.y - branchSize.h / 2 - 150 - H / 2 - (rows - 1) * (H + gapY);
        return branch.items.map((_, i) => ({ x: x0 + (i % cols) * (W + gapX), y: y0 + Math.floor(i / cols) * (H + gapY) }));
    }

    if (branch.leafMode === "bottomGrid") {
        const cols = Math.min(3, n), totalW = cols * W + (cols - 1) * gapX;
        const x0 = p.x - totalW / 2 + W / 2;
        const y0 = p.y + branchSize.h / 2 + 150 + H / 2;
        return branch.items.map((_, i) => ({ x: x0 + (i % cols) * (W + gapX), y: y0 + Math.floor(i / cols) * (H + gapY) }));
    }

    if (branch.leafMode === "leftGrid" || branch.leafMode === "rightGrid") {
        const dir = branch.leafMode === "leftGrid" ? -1 : 1;
        const cols = 2, rows = Math.ceil(n / cols);
        const baseX = p.x + dir * (branchSize.w / 2 + 155 + W / 2);
        const xStep = dir * (W + gapX);
        const totalH = rows * H + (rows - 1) * gapY;
        const y0 = p.y - totalH / 2 + H / 2;
        return branch.items.map((_, i) => ({ x: baseX + (i % cols) * xStep, y: y0 + Math.floor(i / cols) * (H + gapY) }));
    }
    return [];
}

function leafBranchAnchor(branch, lp) {
    const p = branch.pos, dx = lp.x - p.x, dy = lp.y - p.y;
    if (Math.abs(dx) > Math.abs(dy)) return { x: p.x + Math.sign(dx) * branchSize.w / 2, y: p.y };
    return { x: p.x, y: p.y + Math.sign(dy) * branchSize.h / 2 };
}

function leafCardAnchor(branch, lp) {
    const p = branch.pos, dx = lp.x - p.x, dy = lp.y - p.y;
    if (Math.abs(dx) > Math.abs(dy)) return { x: lp.x - Math.sign(dx) * leafSize.w / 2, y: lp.y };
    return { x: lp.x, y: lp.y - Math.sign(dy) * leafSize.h / 2 };
}

function drawLeaf(item, lp, color) {
    const g = nodesLayer.append("g").attr("class", "leaf-node node");
    rect(g, lp.x, lp.y, leafSize.w, leafSize.h, 18, "leaf-shell", null, "url(#cardShadow)");

    g.append("rect")
        .attr("x", lp.x - leafSize.w / 2)
        .attr("y", lp.y - leafSize.h / 2)
        .attr("width", 7)
        .attr("height", leafSize.h)
        .attr("rx", 4)
        .attr("fill", color);

    g.append("text")
        .attr("class", "leaf-title")
        .attr("fill", color)
        .attr("x", lp.x - leafSize.w / 2 + 19)
        .attr("y", lp.y - leafSize.h / 2 + 22)
        .text(item[0].toUpperCase());

    const body = g.append("text").attr("class", "leaf-body");
    wrapText(
        body,
        item[1],
        42,
        14,
        lp.x - leafSize.w / 2 + 19,
        lp.y - leafSize.h / 2 + 43,
        3
    );
}

function drawBranch(branch, index) {
    linksLayer.append("path")
        .attr("class", "main-link")
        .attr("stroke", branch.color)
        .attr("d", cubic(centerEdge(branch), branchEdge(branch)));

    const g = nodesLayer.append("g").attr("class", "node");
    rect(g, branch.pos.x, branch.pos.y, branchSize.w, branchSize.h, 25, "branch-card", branch.color, "url(#cardShadow)");

    g.append("circle")
        .attr("cx", branch.pos.x - branchSize.w / 2 + 39)
        .attr("cy", branch.pos.y - branchSize.h / 2 + 31)
        .attr("r", 20)
        .attr("fill", branch.color);

    g.append("text")
        .attr("class", "branch-number")
        .attr("x", branch.pos.x - branchSize.w / 2 + 39)
        .attr("y", branch.pos.y - branchSize.h / 2 + 31)
        .text(index + 1);

    g.append("text")
        .attr("class", "branch-icon")
        .attr("fill", branch.color)
        .attr("x", branch.pos.x + branchSize.w / 2 - 38)
        .attr("y", branch.pos.y - branchSize.h / 2 + 32)
        .text(branch.icon);

    const lines = branchTitleLines(branch.title);
    const title = g.append("text").attr("class", "branch-title");
    lines.forEach((line, i) => {
        title.append("tspan")
            .attr("x", branch.pos.x)
            .attr("y", branch.pos.y + (i - (lines.length - 1) / 2) * 22 + 7)
            .text(line);
    });

    leafPositions(branch).forEach((lp, i) => {
        linksLayer.append("path")
            .attr("class", "leaf-link")
            .attr("stroke", branch.color)
            .attr("d", cubic(leafBranchAnchor(branch, lp), leafCardAnchor(branch, lp)));
        drawLeaf(branch.items[i], lp, branch.color);
    });
}

drawCenter();
branches.forEach(drawBranch);

function fit() {
    const box = scene.node().getBBox();
    const w = window.innerWidth, h = window.innerHeight;
    const scale = Math.min(.94 / Math.max(box.width / w, box.height / h), 1);
    const tx = (w - box.width * scale) / 2 - box.x * scale;
    const ty = (h - box.height * scale) / 2 - box.y * scale;
    svg.transition().duration(700)
        .call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
}

function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
}

async function exportFullMap() {
    const button = document.getElementById("downloadButton");
    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = "<span>◌</span><span>Generando imagen…</span>";

    try {
        const box = scene.node().getBBox();
        const padding = 140;
        const x = box.x - padding;
        const y = box.y - padding;
        const mapWidth = box.width + padding * 2;
        const mapHeight = box.height + padding * 2;

        const maxDimension = 30000;
        const maxPixels = 100000000;
        const preferredScale = 4;

        const scale = Math.max(
            1,
            Math.min(
                preferredScale,
                maxDimension / mapWidth,
                maxDimension / mapHeight,
                Math.sqrt(maxPixels / (mapWidth * mapHeight))
            )
        );

        const pixelWidth = Math.floor(mapWidth * scale);
        const pixelHeight = Math.floor(mapHeight * scale);

        const exportSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        exportSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        exportSvg.setAttribute("width", pixelWidth);
        exportSvg.setAttribute("height", pixelHeight);
        exportSvg.setAttribute("viewBox", `${x} ${y} ${mapWidth} ${mapHeight}`);

        const defs = svg.node().querySelector("defs").cloneNode(true);
        exportSvg.appendChild(defs);

        const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
        style.textContent = `
      text{font-family:Arial,Helvetica,sans-serif}
      .main-link,.leaf-link{fill:none;stroke-linecap:round;stroke-linejoin:round}
      .main-link{stroke-width:7;opacity:.8}
      .leaf-link{stroke-width:2.2;opacity:.68}
      .center-card{fill:url(#centerGradient);stroke:rgba(255,255,255,.52);stroke-width:2.2}
      .branch-card{fill:#0c1728;fill-opacity:.97;stroke-width:2}
      .leaf-shell{fill:#122033;fill-opacity:.98;stroke:rgba(255,255,255,.14);stroke-width:1}
      .branch-title{fill:#fff;font-size:16px;font-weight:800;text-anchor:middle}
      .branch-number{fill:#0b1423;font-size:14px;font-weight:800;text-anchor:middle;dominant-baseline:middle}
      .center-title{fill:#111a2e;font-family:Georgia,"Times New Roman",serif;font-size:31px;font-weight:700;text-anchor:middle}
      .center-subtitle{fill:#5a3d66;font-size:13px;font-weight:800;letter-spacing:.06em;text-anchor:middle}
      .leaf-title{font-size:13px;font-weight:800}
      .leaf-body{fill:#d4dbe7;font-size:11px;font-weight:500}
      .branch-icon{font-size:22px;text-anchor:middle;dominant-baseline:middle}
    `;
        exportSvg.appendChild(style);

        const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        background.setAttribute("x", x);
        background.setAttribute("y", y);
        background.setAttribute("width", mapWidth);
        background.setAttribute("height", mapHeight);
        background.setAttribute("fill", "url(#exportBackground)");
        exportSvg.appendChild(background);

        const clonedScene = scene.node().cloneNode(true);
        clonedScene.removeAttribute("transform");
        exportSvg.appendChild(clonedScene);

        const serializer = new XMLSerializer();
        const source = '<?xml version="1.0" encoding="UTF-8"?>' + serializer.serializeToString(exportSvg);
        const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
        const svgUrl = URL.createObjectURL(svgBlob);

        const image = new Image();
        image.decoding = "async";

        await new Promise((resolve, reject) => {
            image.onload = resolve;
            image.onerror = () => reject(new Error("No se pudo renderizar el mapa."));
            image.src = svgUrl;
        });

        const canvas = document.createElement("canvas");
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;

        const context = canvas.getContext("2d", { alpha: false });
        if (!context) throw new Error("El navegador no pudo crear el lienzo.");

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(image, 0, 0, pixelWidth, pixelHeight);
        URL.revokeObjectURL(svgUrl);

        const pngBlob = await new Promise(resolve => canvas.toBlob(resolve, "image/png", 1));
        if (!pngBlob) throw new Error("No se pudo crear el archivo PNG.");

        downloadBlob(
            pngBlob,
            `mapa-mental-psicoanalisis-${pixelWidth}x${pixelHeight}.png`
        );
    } catch (error) {
        console.error(error);
        alert("No fue posible generar la imagen. Intenta abrir el archivo en Chrome o Edge y vuelve a descargarla.");
    } finally {
        button.disabled = false;
        button.innerHTML = originalText;
    }
}

document.getElementById("downloadButton").addEventListener("click", exportFullMap);
requestAnimationFrame(fit);
window.addEventListener("resize", () => setTimeout(fit, 120));