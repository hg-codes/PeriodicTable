import {lanthanoid, actinoid, Non_metal, metalloid, elements, Name, Mass, Radius, Phase, Proton, Electron, Neutron, MeltingPoint, BoilingPoint, OxidationState, IonizationEnthalpy, ElectronAffinity, ElectroNegativity, Density, DiscoveredBy, ElectronicConfiguration, Text, Title, Desc, G1, G2, G3, G4, G5, G6, G7, G8, G9, G10, G11, G12, G13, G14, G15, G16, G17, G18} from './selectors.js';
import * as ContentUpdater from './contentUpdater.js';
import { groupMappings } from './groupMapings.js';
import { clearHighlights,addHighlights } from './UiUtility.js';

const buttons = document.querySelectorAll("button");
let isclicked = false;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        Text.classList.remove("textualpopup");
        if (!isclicked)isclicked = true;

        const buttonId = btn.id;    
        if (buttonId === "ClrFilter")
        {        
            buttons.forEach(b => b.classList.remove('active'));
            clearHighlights(elements);
            isclicked = false;
            ContentUpdater.updateContent(Title, Desc);
            Text.classList.remove("textualpopup");
            return;
        }

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.toggle("active");
        
        addHighlights(elements);
        
        if (groupMappings[buttonId])
        {
            const { group, updateFn } = groupMappings[buttonId];
            clearHighlights(group);
            updateFn(Title, Desc);
            return;
        }

        switch (buttonId)
        {
            case "Metal":
                clearHighlights(elements);
                [G17, G18,Non_metal, metalloid].forEach((element) => {
                    addHighlights(element);
                });
                G17[5].classList.remove("lightgray");
                G18[6].classList.remove("lightgray");
                ContentUpdater.updateContentForMetal(Title, Desc);
                break;
            case "Non-Metal":
                [G17, G18,Non_metal].forEach((element) => {
                    clearHighlights(element);
                });
                G17[5].classList.add("lightgray");
                G18[6].classList.add("lightgray");
                ContentUpdater.updateContentForNonMetal(Title, Desc);
                break;
            case "S":
                [G1, G2].forEach((element) => {
                   clearHighlights(element);
                });
                G18[0].classList.remove("lightgray");
                ContentUpdater.updateContentForS(Title, Desc);
                break;
            case "P":
                [G13, G14, G15, G16, G17, G18].forEach((element) => {
                    clearHighlights(element);
                });
                G18[0].classList.add("lightgray");
                ContentUpdater.updateContentForP(Title, Desc);
                break;
            case "D":
                [G3, G4, G5, G6, G7, G8, G9, G10].forEach((element) => {
                    clearHighlights(element);
                });
                [lanthanoid, actinoid].forEach((element) => {
                    addHighlights(element);
                });
                ContentUpdater.updateContentForD(Title, Desc);
                break;
            case "F":
                [lanthanoid, actinoid].forEach((element) => {
                    clearHighlights(element);
                });
                ContentUpdater.updateContentForF(Title, Desc);
                break;
        }
    })
});

async function findElementData(AtomicNumber) {
    try{
        const response = await fetch("PeriodicTable.json");
        const data = await response.json();
        const element = data.find((ele) => ele.number == AtomicNumber);
        if (element) ContentUpdater.updateValues(element);
    }catch (error){
        console.error("Error fetching element data:", error);
    }
}

elements.forEach((ele) => {
    ele.addEventListener("mouseenter", () => {
        const AtomicNumber = ele.textContent.match(/\d+/)[0];
        if (!isclicked)
        {
            Text.classList.add("textualpopup");
            findElementData(AtomicNumber);
        }
    })
});