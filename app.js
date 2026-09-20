(() => {
  "use strict";

  const YES_NO = ["Yes", "No"];
  const YES_NO_NA = ["Yes", "No", "N/A"];
  const YES_NO_NR = ["Yes", "No", "NR"];
  const PRESENT_ABSENT_NA = ["Present", "Absent", "Not relevant"];

  const AUDITS = {
    idBracelet: {
      id: "id-bracelet",
      title: "ID Bracelet Observation Tool",
      description: "Audits whether the patient identification bracelet and its required details are present and legible/appropriate.",
      optionNote: "Choose Yes or No for each criterion.",
      groups: [
        { name: "ID bracelet", fields: [
          f("bracelet", "Bracelet present", YES_NO, "Yes"),
          f("name", "Name present", YES_NO, "Yes"),
          f("surname", "Surname present", YES_NO, "Yes"),
          f("id", "ID present", YES_NO, "Yes"),
          f("ward", "Ward present", YES_NO, "Yes"),
          f("unsoiled", "Bracelet unsoiled", YES_NO, "Yes")
        ]}
      ]
    },

    vip: {
      id: "vip",
      title: "Visual Infusion Phlebitis (VIP) Observation Tool",
      description: "Audits PVC dressing, insertion-date documentation, VIP assessment/documentation, dwell time and observed VIP status.",
      optionNote: "Use N/A when a criterion is not applicable. Context questions are shown in the CSV but are not included in the compliance denominator.",
      groups: [
        { name: "PVC context", fields: [
          f("cannula", "Cannula present", YES_NO, null, false),
          f("ivTherapy", "Patient on IV fluids / treatment", YES_NO_NA, null, false)
        ]},
        { name: "PVC / VIP compliance", fields: [
          f("insertionDate", "Insertion date legibly written on dressing", YES_NO_NA, "Yes"),
          f("dressing", "Dressing is dry, unsoiled and adherent", YES_NO_NA, "Yes"),
          f("sterileDressing", "One sterile transparent dressing applied", YES_NO_NA, "Yes"),
          f("vip24h", "VIP score completed in the last 24 hours and documented on NR", YES_NO_NA, "Yes"),
          f("vipMatches", "VIP score on NR is in line with observation", YES_NO_NA, "Yes"),
          f("pvc72", "PVC <72 hours", YES_NO_NA, "Yes"),
          f("vipUnder1", "VIP <1", YES_NO_NA, "Yes")
        ]}
      ]
    },

    nr: {
      id: "nursing-report",
      title: "Nursing Report (NR) Observation Tool",
      description: "Audits the structured nursing report, tick area, device/documentation details and open report area.",
      optionNote: "Use NR when the criterion is not relevant to that case. NR is excluded from the compliance denominator.",
      groups: [
        { name: "Patient / report identification", fields: [
          f("wardName", "Ward's name", YES_NO_NR, "Yes"),
          f("bedNumber", "Bed number", YES_NO_NR, "Yes"),
          f("admissionDate", "Date of admission", YES_NO_NR, "Yes"),
          f("fullName", "Full patient name", YES_NO_NR, "Yes"),
          f("patientId", "I.D.", YES_NO_NR, "Yes"),
          f("consultant", "Consultant name", YES_NO_NR, "Yes"),
          f("diagnosis", "Diagnosis", YES_NO_NR, "Yes"),
          f("allergies", "Presence of allergies", YES_NO_NR, "Yes"),
          f("reportDate", "Date of report", YES_NO_NR, "Yes")
        ]},
        { name: "Tick area", fields: [
          f("cognitive", "Cognitive", YES_NO_NR, "Yes"),
          f("cognitiveElab", "Cognitive elaborated", YES_NO_NR, "Yes"),
          f("breathing", "Breathing", YES_NO_NR, "Yes"),
          f("breathingElab", "Breathing elaborated", YES_NO_NR, "Yes"),
          f("hygiene", "Hygiene", YES_NO_NR, "Yes"),
          f("hygieneElab", "Hygiene elaborated", YES_NO_NR, "Yes"),
          f("mobility", "Mobility", YES_NO_NR, "Yes"),
          f("mobilityElab", "Mobility elaborated", YES_NO_NR, "Yes"),
          f("skin", "Skin", YES_NO_NR, "Yes")
        ]},
        { name: "Wound / skin documentation", fields: [
          f("cod", "COD if done today", YES_NO_NR, "Yes"),
          f("woundLocation", "Wound site location", YES_NO_NR, "Yes"),
          f("dressingUsed", "Dressing used described", YES_NO_NR, "Yes"),
          f("woundProgress", "Progress of wound recorded", YES_NO_NR, "Yes")
        ]},
        { name: "Peripheral venous cannula", fields: [
          f("pvc", "Peripheral venous cannula", YES_NO_NR, "Yes"),
          f("pvcNumber", "PVC number", YES_NO_NR, "Yes"),
          f("siteInsertion", "Site of insertion", YES_NO_NR, "Yes"),
          f("pvcColour", "PVC colour", YES_NO_NR, "Yes"),
          f("vipScore", "VIP score", YES_NO_NR, "Yes"),
          f("pvcRemoval", "PVC removal indicated", YES_NO_NR, "Yes"),
          f("iviRegime", "IVI regime", YES_NO_NR, "Yes")
        ]},
        { name: "Intake, output and nutrition", fields: [
          f("ioCharting", "Intake & output charting", YES_NO_NR, "Yes"),
          f("nutrition", "Nutrition", YES_NO_NR, "Yes"),
          f("nutritionElab", "Nutrition elaborated", YES_NO_NR, "Yes"),
          f("urine", "Urine", YES_NO_NR, "Yes"),
          f("urineElab", "Urine output elaborated", YES_NO_NR, "Yes"),
          f("bowels", "Bowels", YES_NO_NR, "Yes"),
          f("bowelElab", "Bowel opening elaborated", YES_NO_NR, "Yes"),
          f("ngDrainage", "Naso-gastric drainage", YES_NO_NR, "Yes"),
          f("sleepRest", "Sleep / Rest", YES_NO_NR, "Yes"),
          f("sleepRestElab", "Sleep / Rest elaborated", YES_NO_NR, "Yes")
        ]},
        { name: "Discharge / devices / reminders", fields: [
          f("dischargePlan", "Discharge plan", YES_NO_NR, "Yes"),
          f("samples", "Samples", YES_NO_NR, "Yes"),
          f("catheterType", "Urinary catheter type", YES_NO_NR, "Yes"),
          f("catheterDue", "Urinary catheter due date", YES_NO_NR, "Yes"),
          f("catheterSize", "Size of catheter indicated", YES_NO_NR, "Yes"),
          f("mdro", "MDRO", YES_NO_NR, "Yes"),
          f("reminders", "Reminders box utilised", YES_NO_NR, "Yes")
        ]},
        { name: "Open report area", fields: [
          f("importantInfo", "Important information is included", YES_NO_NR, "Yes"),
          f("chronological", "Report is chronological", YES_NO_NR, "Yes"),
          f("actions", "Actions taken documented", YES_NO_NR, "Yes"),
          f("outcomes", "Reference is made to outcomes of action taken", YES_NO_NR, "Yes"),
          f("noRepeats", "There are no repeat statements from tick-in area", YES_NO_NR, "Yes"),
          f("daySig", "Day nurse signature present", YES_NO_NR, "Yes"),
          f("nightArea", "Night report area clearly indicated", YES_NO_NR, "Yes"),
          f("nightSig", "Night nurse signature present", YES_NO_NR, "Yes")
        ]}
      ]
    },

    rx: {
      id: "rx-chart",
      title: "Patient Rx Chart Observation Tool",
      description: "Audits prescription-chart demographics, allergy status, medication prescribing/administration, anticoagulation, oxygen and IV/blood product documentation.",
      optionNote: "Present = compliant, Absent = non-compliant, Not relevant = excluded from the denominator.",
      groups: [
        { name: "Demographic", fields: [
          f("surname", "Surname", PRESENT_ABSENT_NA, "Present"),
          f("weight", "Weight", PRESENT_ABSENT_NA, "Present"),
          f("id", "ID", PRESENT_ABSENT_NA, "Present"),
          f("age", "Age", PRESENT_ABSENT_NA, "Present"),
          f("ward", "Ward", PRESENT_ABSENT_NA, "Present"),
          f("consultant", "Consultant", PRESENT_ABSENT_NA, "Present")
        ]},
        { name: "Allergies", fields: [
          f("allergies", "Allergies documented", PRESENT_ABSENT_NA, "Present"),
          f("reactions", "Reactions documented", PRESENT_ABSENT_NA, "Present"),
          f("allergyMoSig", "MO signature (allergies)", PRESENT_ABSENT_NA, "Present"),
          f("allergyMoReg", "MO registration no. (allergies)", PRESENT_ABSENT_NA, "Present"),
          f("noAllergies", "No allergies documented", PRESENT_ABSENT_NA, "Present"),
          f("noAllergyMoSig", "MO signature (no allergies)", PRESENT_ABSENT_NA, "Present"),
          f("noAllergyMoReg", "MO registration no. (no allergies)", PRESENT_ABSENT_NA, "Present")
        ]},
        { name: "Chart / clinical condition", fields: [
          f("clinicalCondition", "Clinical condition", PRESENT_ABSENT_NA, "Present"),
          f("chartNumber", "Chart number indicated", PRESENT_ABSENT_NA, "Present"),
          f("dateIndicated", "Date indicated", PRESENT_ABSENT_NA, "Present")
        ]},
        { name: "Regular / SC / AC / PRN / STAT medications - MO", fields: [
          f("datePrescribed", "Date prescribed", PRESENT_ABSENT_NA, "Present"),
          f("genericTerm", "Generic terminology", PRESENT_ABSENT_NA, "Present"),
          f("genericBlock", "Generic block", PRESENT_ABSENT_NA, "Present"),
          f("frequency", "Frequency", PRESENT_ABSENT_NA, "Present"),
          f("route", "Route specified", PRESENT_ABSENT_NA, "Present"),
          f("doseUnit", "Dose in appropriate unit", PRESENT_ABSENT_NA, "Present"),
          f("moStartSig", "MO start signature", PRESENT_ABSENT_NA, "Present"),
          f("moStartReg", "MO start registration no.", PRESENT_ABSENT_NA, "Present"),
          f("moScPresc", "MO SC prescription", PRESENT_ABSENT_NA, "Present"),
          f("moScReg", "MO SC registration no.", PRESENT_ABSENT_NA, "Present"),
          f("stopDate", "Stop date indicated", PRESENT_ABSENT_NA, "Present"),
          f("moStopSig", "MO stop signature", PRESENT_ABSENT_NA, "Present"),
          f("moStopReg", "MO stop registration no.", PRESENT_ABSENT_NA, "Present"),
          f("instructionRegular", "Instruction in regular medication", PRESENT_ABSENT_NA, "Present"),
          f("indicationPrn", "Indication in PRN", PRESENT_ABSENT_NA, "Present")
        ]},
        { name: "Regular / SC / oral AC medications - Nurse", fields: [
          f("nonAdminCoded", "Non-administration coded", PRESENT_ABSENT_NA, "Present"),
          f("adminInitials", "Administration initials", PRESENT_ABSENT_NA, "Present"),
          f("adminTime", "Administration time set", PRESENT_ABSENT_NA, "Present"),
          f("adminSpace", "Administration initials within allocated space", PRESENT_ABSENT_NA, "Present")
        ]},
        { name: "Oral anticoagulation", fields: [
          f("therapyIndication", "Therapy indication", PRESENT_ABSENT_NA, "Present"),
          f("targetInr", "Target INR", PRESENT_ABSENT_NA, "Present"),
          f("acMoSig", "MO signature", PRESENT_ABSENT_NA, "Present"),
          f("acMoReg", "MO registration no.", PRESENT_ABSENT_NA, "Present"),
          f("acAdminInitials", "Administration initials", PRESENT_ABSENT_NA, "Present")
        ]},
        { name: "Oxygen therapy", fields: [
          f("oxygenDate", "Date present", PRESENT_ABSENT_NA, "Present"),
          f("oxygenTime", "Time", PRESENT_ABSENT_NA, "Present"),
          f("deliveryDevice", "Delivery device", PRESENT_ABSENT_NA, "Present"),
          f("litresOrPercent", "L/min - O2 %", PRESENT_ABSENT_NA, "Present"),
          f("oxygenFrequency", "Frequency", PRESENT_ABSENT_NA, "Present"),
          f("oxygenMoSig", "MO signature", PRESENT_ABSENT_NA, "Present"),
          f("oxygenMoReg", "MO registration no.", PRESENT_ABSENT_NA, "Present"),
          f("nurseInitials", "Nurse initials", PRESENT_ABSENT_NA, "Present")
        ]},
        { name: "IV / blood product administration", fields: [
          f("ivStartDateTime", "Start date & time", PRESENT_ABSENT_NA, "Present"),
          f("ivMoStartSig", "MO start signature", PRESENT_ABSENT_NA, "Present"),
          f("ivMoStartReg", "MO start registration no.", PRESENT_ABSENT_NA, "Present"),
          f("ivFluid", "IV fluid", PRESENT_ABSENT_NA, "Present"),
          f("volume", "Volume", PRESENT_ABSENT_NA, "Present"),
          f("rate", "Rate", PRESENT_ABSENT_NA, "Present"),
          f("ivStopDateTime", "Stop date & time", PRESENT_ABSENT_NA, "Present"),
          f("additive", "Additive", PRESENT_ABSENT_NA, "Present"),
          f("additiveDose", "Additive dose", PRESENT_ABSENT_NA, "Present"),
          f("ivMoStopSig", "MO stop signature", PRESENT_ABSENT_NA, "Present"),
          f("ivMoStopReg", "MO stop registration no.", PRESENT_ABSENT_NA, "Present")
        ]}
      ]
    }
  };

  function f(id, label, options, passValue, scored = true) {
    return { id, label, options, passValue, scored };
  }

  const auditKey = document.body.dataset.audit;
  if (!auditKey || !AUDITS[auditKey]) return;
  const config = AUDITS[auditKey];
  const storageKey = `wardAudit:${config.id}:draft:v1`;
  const $ = (id) => document.getElementById(id);
  const allFields = config.groups.flatMap(g => g.fields.map(field => ({ ...field, group: g.name })));
  let state = loadState();
  let editingIndex = null;

  initialise();

  function defaultState() {
    return {
      ward: "",
      auditDate: new Date().toISOString().slice(0, 10),
      observer: "",
      target: 95,
      cases: []
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
    } catch (_) {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(storageKey, JSON.stringify(state));
    $("saveState").textContent = `Draft saved locally · ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  }

  function initialise() {
    $("auditTitle").textContent = config.title;
    $("auditDescription").textContent = config.description;
    $("optionNote").textContent = config.optionNote;
    $("ward").value = state.ward;
    $("auditDate").value = state.auditDate;
    $("observer").value = state.observer;
    $("target").value = state.target;
    renderForm();
    bindEvents();
    renderAll();
  }

  function renderForm() {
    const form = $("auditForm");
    form.innerHTML = "";
    config.groups.forEach(group => {
      const section = document.createElement("section");
      section.className = "audit-section";
      const h3 = document.createElement("h3");
      h3.textContent = group.name;
      section.appendChild(h3);
      group.fields.forEach(field => {
        const row = document.createElement("div");
        row.className = "criterion";
        const label = document.createElement("div");
        label.className = "criterion-label";
        label.textContent = field.label;
        if (!field.scored) {
          const badge = document.createElement("span");
          badge.className = "context-badge";
          badge.textContent = "context only";
          label.appendChild(badge);
        }
        const controls = document.createElement("div");
        controls.className = "segmented";
        controls.setAttribute("role", "radiogroup");
        controls.setAttribute("aria-label", field.label);
        field.options.forEach(option => {
          const radioLabel = document.createElement("label");
          const input = document.createElement("input");
          input.type = "radio";
          input.name = `field_${field.id}`;
          input.value = option;
          const span = document.createElement("span");
          span.textContent = option;
          radioLabel.append(input, span);
          controls.appendChild(radioLabel);
        });
        row.append(label, controls);
        section.appendChild(row);
      });
      form.appendChild(section);
    });
  }

  function bindEvents() {
    ["ward", "auditDate", "observer", "target"].forEach(id => {
      $(id).addEventListener("input", () => {
        state[id] = id === "target" ? clampTarget($(id).value) : $(id).value;
        saveState();
        if (id === "target") renderResults();
      });
    });

    $("addCase").addEventListener("click", addOrUpdateCase);
    $("clearEntry").addEventListener("click", clearEntry);
    $("exportCsv").addEventListener("click", exportCsv);
    $("printPage").addEventListener("click", () => window.print());
    $("resetAudit").addEventListener("click", resetAudit);
  }

  function clampTarget(value) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 95;
    return Math.min(100, Math.max(1, Math.round(n)));
  }

  function addOrUpdateCase() {
    const caseRef = $("caseRef").value.trim();
    if (!caseRef) {
      alert("Please enter a case / bed reference. Do not use a patient identifier.");
      $("caseRef").focus();
      return;
    }

    const responses = {};
    const unanswered = [];
    for (const field of allFields) {
      const selected = document.querySelector(`input[name="field_${cssEscape(field.id)}"]:checked`);
      if (!selected) unanswered.push(field.label);
      else responses[field.id] = selected.value;
    }
    if (unanswered.length) {
      alert(`Please complete every item. Use N/A / NR where appropriate.\n\nMissing: ${unanswered.slice(0, 8).join(", ")}${unanswered.length > 8 ? "…" : ""}`);
      return;
    }

    const record = {
      caseRef,
      comments: $("comments").value.trim(),
      responses,
      savedAt: new Date().toISOString()
    };

    if (editingIndex === null) state.cases.push(record);
    else state.cases[editingIndex] = record;

    editingIndex = null;
    $("addCase").textContent = "Add case";
    saveState();
    clearEntry(false);
    renderAll();
    window.scrollTo({ top: document.querySelector(".summary-grid").offsetTop - 20, behavior: "smooth" });
  }

  function clearEntry(resetEditing = true) {
    $("caseRef").value = "";
    $("comments").value = "";
    document.querySelectorAll('#auditForm input[type="radio"]').forEach(r => { r.checked = false; });
    if (resetEditing) {
      editingIndex = null;
      $("addCase").textContent = "Add case";
    }
  }

  function renderAll() {
    renderMetrics();
    renderResults();
    renderCases();
  }

  function isExcluded(field, value) {
    if (!field.scored) return true;
    return value === "N/A" || value === "NR" || value === "Not relevant" || value === undefined || value === "";
  }

  function calculate() {
    let applicable = 0;
    let passes = 0;
    const criteria = allFields.map(field => {
      let pass = 0, fail = 0, na = 0;
      for (const record of state.cases) {
        const value = record.responses[field.id];
        if (!field.scored || isExcluded(field, value)) {
          na++;
        } else {
          applicable++;
          if (value === field.passValue) { pass++; passes++; }
          else fail++;
        }
      }
      const denom = pass + fail;
      return { ...field, pass, fail, na, applicable: denom, pct: denom ? (pass / denom) * 100 : null };
    });
    return { applicable, passes, overall: applicable ? (passes / applicable) * 100 : null, criteria };
  }

  function renderMetrics() {
    const calc = calculate();
    $("caseCount").textContent = state.cases.length;
    $("applicableCount").textContent = calc.applicable;
    $("passCount").textContent = calc.passes;
    $("overallCompliance").textContent = calc.overall === null ? "—" : `${calc.overall.toFixed(1)}%`;
  }

  function renderResults() {
    const tbody = $("resultsTable").querySelector("tbody");
    tbody.innerHTML = "";
    const calc = calculate();
    const target = clampTarget(state.target);
    const scoredRows = calc.criteria.filter(r => r.scored);
    if (!state.cases.length) {
      tbody.innerHTML = '<tr><td colspan="8" class="empty-row">Add a case to see results.</td></tr>';
      return;
    }
    scoredRows.forEach(row => {
      const tr = document.createElement("tr");
      const targetStatus = row.pct === null ? "—" : row.pct >= target ? "Met" : "Below";
      const targetClass = row.pct === null ? "status-na" : row.pct >= target ? "status-good" : "status-bad";
      tr.innerHTML = `
        <td>${html(row.group)}</td>
        <td>${html(row.label)}</td>
        <td>${row.pass}</td>
        <td>${row.fail}</td>
        <td>${row.na}</td>
        <td>${row.applicable}</td>
        <td>${row.pct === null ? "—" : row.pct.toFixed(1) + "%"}</td>
        <td class="${targetClass}">${targetStatus}</td>`;
      tbody.appendChild(tr);
    });
  }

  function renderCases() {
    const table = $("casesTable");
    const thead = table.querySelector("thead");
    const tbody = table.querySelector("tbody");
    thead.innerHTML = "<tr><th>Case / bed</th><th>Case compliance</th><th>Comments</th><th>Actions</th></tr>";
    tbody.innerHTML = "";
    if (!state.cases.length) {
      tbody.innerHTML = '<tr><td colspan="4" class="empty-row">No cases recorded yet.</td></tr>';
      return;
    }
    state.cases.forEach((record, index) => {
      const score = caseScore(record);
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${html(record.caseRef)}</td>
        <td>${score.applicable ? `${score.pct.toFixed(1)}% (${score.pass}/${score.applicable})` : "—"}</td>
        <td>${html(record.comments || "")}</td>
        <td>
          <button class="button secondary small-button" data-action="edit" data-index="${index}">Edit</button>
          <button class="button danger small-button" data-action="delete" data-index="${index}">Delete</button>
        </td>`;
      tbody.appendChild(tr);
    });
    tbody.querySelectorAll("button[data-action]").forEach(button => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        if (button.dataset.action === "edit") editCase(index);
        else deleteCase(index);
      });
    });
  }

  function caseScore(record) {
    let pass = 0, applicable = 0;
    allFields.forEach(field => {
      const value = record.responses[field.id];
      if (isExcluded(field, value)) return;
      applicable++;
      if (value === field.passValue) pass++;
    });
    return { pass, applicable, pct: applicable ? (pass / applicable) * 100 : 0 };
  }

  function editCase(index) {
    const record = state.cases[index];
    if (!record) return;
    editingIndex = index;
    $("caseRef").value = record.caseRef;
    $("comments").value = record.comments || "";
    allFields.forEach(field => {
      const value = record.responses[field.id];
      const radios = document.querySelectorAll(`input[name="field_${cssEscape(field.id)}"]`);
      radios.forEach(r => { r.checked = r.value === value; });
    });
    $("addCase").textContent = "Update case";
    document.querySelector(".entry-card").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function deleteCase(index) {
    if (!confirm(`Delete ${state.cases[index]?.caseRef || "this case"}?`)) return;
    state.cases.splice(index, 1);
    saveState();
    renderAll();
  }

  function resetAudit() {
    if (!confirm("Reset this audit and delete the locally saved draft from this browser? Export your CSV first if you need to keep it.")) return;
    state = defaultState();
    localStorage.removeItem(storageKey);
    editingIndex = null;
    $("ward").value = state.ward;
    $("auditDate").value = state.auditDate;
    $("observer").value = state.observer;
    $("target").value = state.target;
    clearEntry();
    renderAll();
    $("saveState").textContent = "New audit";
  }

  function exportCsv() {
    if (!state.cases.length) {
      alert("Add at least one case before exporting.");
      return;
    }
    syncMetadata();
    const calc = calculate();
    const target = clampTarget(state.target);
    const rows = [];

    rows.push(["AUDIT SUMMARY"]);
    rows.push(["Audit", config.title]);
    rows.push(["Ward / area", state.ward]);
    rows.push(["Audit date", state.auditDate]);
    rows.push(["Observer", state.observer]);
    rows.push(["Target compliance", `${target}%`]);
    rows.push(["Cases audited", state.cases.length]);
    rows.push(["Applicable checks", calc.applicable]);
    rows.push(["Compliant checks", calc.passes]);
    rows.push(["Overall compliance", calc.overall === null ? "" : `${calc.overall.toFixed(1)}%`]);
    rows.push([]);

    rows.push(["CRITERION RESULTS"]);
    rows.push(["Section", "Criterion", "Scored", "Pass", "Fail", "N/A or excluded", "Applicable", "Compliance %", "Target status"]);
    calc.criteria.forEach(row => {
      rows.push([
        row.group,
        row.label,
        row.scored ? "Yes" : "No - context only",
        row.pass,
        row.fail,
        row.na,
        row.applicable,
        row.pct === null ? "" : row.pct.toFixed(1),
        !row.scored || row.pct === null ? "" : row.pct >= target ? "Met" : "Below"
      ]);
    });
    rows.push([]);

    rows.push(["CASE DATA"]);
    rows.push(["Case / bed reference", "Case compliance %", "Comments", ...allFields.map(field => `${field.group} - ${field.label}`)]);
    state.cases.forEach(record => {
      const score = caseScore(record);
      rows.push([
        record.caseRef,
        score.applicable ? score.pct.toFixed(1) : "",
        record.comments || "",
        ...allFields.map(field => record.responses[field.id] ?? "")
      ]);
    });

    const csv = rows.map(row => row.map(csvCell).join(",")).join("\r\n");
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const ward = sanitizeFilename(state.ward || "ward");
    link.href = url;
    link.download = `${config.id}_${ward}_${state.auditDate || "audit"}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function syncMetadata() {
    state.ward = $("ward").value.trim();
    state.auditDate = $("auditDate").value;
    state.observer = $("observer").value.trim();
    state.target = clampTarget($("target").value);
    saveState();
  }

  function csvCell(value) {
    const s = String(value ?? "");
    return `"${s.replace(/"/g, '""')}"`;
  }

  function sanitizeFilename(value) {
    return value.replace(/[^a-z0-9-_]+/gi, "-").replace(/^-+|-+$/g, "") || "ward";
  }

  function html(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === "function") return window.CSS.escape(value);
    return value.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }
})();
