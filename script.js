import {
  G1, G2, G3, G4, G5, G6, G7, G8, G9, G10,
  G11, G12, G13, G14, G15, G16, G17, G18,
  P1, P2, P3, P4, P5, P6, P7,
  lanthanoid, actinoid, Non_metal, metalloid, elements
} from './selectors.js';

import * as ContentUpdater from './contentUpdater.js';

const Name = document.querySelector(".ptitle");
const Mass = document.querySelector("#Mass");
const Radius = document.querySelector("#Radius");
const Phase = document.querySelector("#Phase");
const Proton = document.querySelector("#Proton");
const Electron = document.querySelector("#Electron");
const Neutron = document.querySelector("#Neutron");
const MeltingPoint = document.querySelector("#MeltingPoint");
const BoilingPoint = document.querySelector("#BoilingPoint");
const OxidationState = document.querySelector("#OxidationState");
const IonizationEnthalpy = document.querySelector("#IonizationEnthalpy");
const ElectronAffinity = document.querySelector("#ElectronAffinity");
const ElectroNegativity = document.querySelector("#ElectroNegativity");
const Density = document.querySelector("#Density");
const DiscoveredBy = document.querySelector("#DiscoveredBy");
const ElectronicConfiguration = document.querySelector("#ElectronicConfiguration");
const buttons = document.querySelectorAll("button");
const Text = document.querySelector(".textual");
const Title = document.querySelector("#titletext");
const Desc = document.querySelector("#desctext");

let isclicked = false;

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        Text.classList.remove("textualpopup");
        if (!isclicked)
        {
            isclicked = true;
        }

        const buttonId = btn.id;    
        if (buttonId === "ClrFilter")
        {        
            buttons.forEach(b => b.classList.remove('active'));
            elements.forEach((element) => {
                element.classList.remove("lightgray");
            });
            isclicked = false;
            ContentUpdater.updateContent(Title, Desc);
            Text.classList.remove("textualpopup");
            return;
        }

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.toggle("active");
        
        elements.forEach((element) => {
            element.classList.add("lightgray");
        });
        
        switch (buttonId)
        {
            case "G1":
                G1.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG1(Title, Desc);
                break;
            case "G2":
                G2.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG2(Title, Desc);
                break;
            case "G3":
                G3.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG3(Title, Desc);
                break;
            case "G4":
                G4.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG4(Title, Desc);
                break;
            case "G5":
                G5.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG5(Title, Desc);
                break;
            case "G6":
                G6.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG6(Title, Desc);
                break;
            case "G7":
                G7.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG7(Title, Desc);
                break;
            case "G8":
                G8.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG8(Title, Desc);
                break;
            case "G9":
                G9.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG9(Title, Desc);
                break;
            case "G10":
                G10.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG10(Title, Desc);
                break;
            case "G11":
                G11.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG11(Title, Desc);
                break;
            case "G12":
                G12.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG12(Title, Desc);
                break;
            case "G13":
                G13.forEach((element) => {
                    element.classList.remove("lightgray");
                });ContentUpdater.updateContentForG13(Title, Desc);
                break;
            case "G14":
                G14.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG14(Title, Desc);
                break;
            case "G15":
                G15.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG15(Title, Desc);
                break;
            case "G16":
                G16.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG16(Title, Desc);
                break;
            case "G17":
                G17.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG17(Title, Desc);
                break;
            case "G18":
                G18.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForG18(Title, Desc);
                break;
            case "P1":
                P1.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForP1(Title, Desc);
                break;
            case "P2":
                P2.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForP2(Title, Desc);
                break;
            case "P3":
                P3.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForP3(Title, Desc);
                break;
            case "P4":
                P4.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForP4(Title, Desc);
                break;
            case "P5":
                P5.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForP5(Title, Desc);
                break;
            case "P6":
                P6.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForP6(Title, Desc);
                break;
            case "P7":
                P7.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForP7(Title, Desc);
                break;
            case "Metal":
                    elements.forEach((element) => {
                        element.classList.remove("lightgray");
                    });
                Non_metal.forEach((element) => {
                    element.classList.add("lightgray");
                });
                metalloid.forEach((element) => {
                    element.classList.add("lightgray");
                });
                [G17, G18].forEach((element) => {
                    element.forEach((el) => {
                        el.classList.add("lightgray");
                    });
                });
                G17[5].classList.remove("lightgray");
                G18[6].classList.remove("lightgray");
                ContentUpdater.updateContentForMetal(Title, Desc);
                break;
            case "Non-Metal":
                Non_metal.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                [G17, G18].forEach((element) => {
                    element.forEach((el) => {
                        el.classList.remove("lightgray");
                    });
                });
                G17[5].classList.add("lightgray");
                G18[6].classList.add("lightgray");
                ContentUpdater.updateContentForNonMetal(Title, Desc);
                break;
            case "S":
                [G1, G2].forEach((element) => {
                    element.forEach((el) => {
                        el.classList.remove("lightgray");
                    });
                });
                G18[0].classList.remove("lightgray");
                ContentUpdater.updateContentForS(Title, Desc);
                break;
            case "P":
                [G13, G14, G15, G16, G17, G18].forEach((element) => {
                    element.forEach((el) => {
                        el.classList.remove("lightgray");
                    });
                });
                G18[0].classList.add("lightgray");
                ContentUpdater.updateContentForP(Title, Desc);
                break;
            case "D":
                [G3, G4, G5, G6, G7, G8, G9, G10].forEach((element) => {
                    element.forEach((el) => {
                        el.classList.remove("lightgray");
                    });
                });
                [lanthanoid, actinoid].forEach((element) => {
                    element.forEach((el) => {
                        el.classList.add("lightgray");
                    });
                });
                ContentUpdater.updateContentForD(Title, Desc);
                break;
            case "F":
                [lanthanoid, actinoid].forEach((element) => {
                    element.forEach((el) => {
                        el.classList.remove("lightgray");
                    });
                });
                ContentUpdater.updateContentForF(Title, Desc);
                break;
            case "Planthanoid":
                lanthanoid.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForLanthanoid(Title, Desc);
                break;
            case "PActinoid":
                actinoid.forEach((element) => {
                    element.classList.remove("lightgray");
                });
                ContentUpdater.updateContentForActinoid(Title, Desc);
                break;
        }
        
    })
});

async function findElement(AtomicNumber) {
    try
    {
        const response = await fetch("PeriodicTable.json");
        const data = await response.json();

        data.forEach((element) => {
            if (element.number == AtomicNumber)
            {
                Name.textContent = element.name;
                Mass.textContent = element.Mass;
                Radius.textContent = element.Radius;
                Phase.textContent = element.Phase;
                Proton.textContent = element.Proton;
                Electron.textContent = element.Electron;
                Neutron.textContent = element.Neutron;
                MeltingPoint.textContent = element.MeltingPoint;
                BoilingPoint.textContent = element.BoilingPoint;
                OxidationState.textContent = element.OxidationState;
                IonizationEnthalpy.textContent = element.IonizationEnthalpy;
                ElectronAffinity.textContent = element.ElectronAffinity;
                ElectroNegativity.textContent = element.ElectroNegativity;
                Density.textContent = element.Density;
                DiscoveredBy.textContent = element.DiscoveredBy;
                ElectronicConfiguration.textContent = element.ElectronicConfiguration;
            }
        });
    }
    catch (error)
    {
        console.error("Error fetching element data:", error);
    }
}

elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        const AtomicNumber = element.textContent.match(/\d+/)[0];
        if (!isclicked)
        {
            Text.classList.add("textualpopup");
            findElement(AtomicNumber);
        }
    })
});
