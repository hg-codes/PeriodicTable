import { Name, Mass, Radius, Phase, Proton, Electron, Neutron, MeltingPoint, BoilingPoint, OxidationState, IonizationEnthalpy, ElectronAffinity, ElectroNegativity, Density, DiscoveredBy, ElectronicConfiguration } from "./selectors.js";

export function updateContentForG1(title, desc) {
    title.textContent = "G1 – Alkali Metals";
    desc.textContent = "Soft, shiny, highly reactive metals like lithium, sodium, and potassium. They have one valence electron, form +1 ions, and react vigorously with water. Commonly used in batteries, heat exchangers, and as reducing agents.";
}
export function updateContentForG2(title, desc) {
    title.textContent = "G2 – Alkaline Earth Metals";
    desc.textContent = "Metals like magnesium, calcium, and barium. They have two valence electrons, forming +2 ions. They are harder and less reactive than alkali metals and are used in construction, fireworks, and biological systems.";
}
export function updateContentForG3(title, desc) {
    title.textContent = "G3 – Transition Metals (starting group)";
    desc.textContent = "Includes scandium, yttrium, and elements in the lanthanide and actinide series. These are hard metals with high melting points and variable oxidation states. Used in aerospace, catalysts, and high-performance materials.";
}
export function updateContentForG4(title, desc) {
    title.textContent = "G4 – Transition Metals";
    desc.textContent = "Features titanium and zirconium. Known for their strength, corrosion resistance, and lightweight properties. Titanium is used in implants, aircraft, and sports gear. Forms stable +4 oxidation states.";
}
export function updateContentForG5(title, desc) {
    title.textContent = "G5 – Transition Metals";
    desc.textContent = "Includes vanadium, niobium, and tantalum. These metals show multiple oxidation states and are used in alloy production, catalysts, and high-strength tools.";
}
export function updateContentForG6(title, desc) {
    title.textContent = "G6 – Transition Metals";
    desc.textContent = "Chromium, molybdenum, and tungsten dominate this group. Known for high hardness and melting points. Used in steel alloys, cutting tools, and pigments. Chromium is key in stainless steel.";
}
export function updateContentForG7(title, desc) {
    title.textContent = "G7 – Transition Metals";
    desc.textContent = "Contains manganese, technetium, and rhenium. These elements are important for their oxidation versatility. Manganese is vital in steelmaking; technetium is used in medical imaging.";
}
export function updateContentForG8(title, desc) {
    title.textContent = "G8 – Transition Metals";
    desc.textContent = "Includes iron, ruthenium, and osmium. Iron is one of the most abundant and widely used metals, essential in construction and machinery. Ruthenium and osmium are rare and used in electronics and catalysts.";
}
export function updateContentForG9(title, desc) {
    title.textContent = "G9 – Transition Metals";
    desc.textContent = "Cobalt, rhodium, and iridium fall here. Cobalt is used in batteries and magnets. Rhodium and iridium are highly corrosion-resistant and valuable in catalytic converters and electronics.";
}
export function updateContentForG10(title, desc) {
    title.textContent = "G10 – Transition Metals";
    desc.textContent = "Nickel, palladium, and platinum belong to this group. Known for their catalytic properties and resistance to corrosion. Widely used in jewelry, fuel cells, and chemical processing.";
}
export function updateContentForG11(title, desc) {
    title.textContent = "G11 – Coinage Metals";
    desc.textContent = "Copper, silver, and gold. Excellent electrical conductors with lower reactivity. Historically used for coins and still essential in electronics, jewelry, and antimicrobial surfaces.";
}
export function updateContentForG12(title, desc) {
    title.textContent = "G12 – Zinc Group";
    desc.textContent = "Zinc, cadmium, and mercury. Typically form +2 oxidation states. Zinc is essential for biological functions and galvanization. Mercury is a liquid at room temperature and used in older thermometers and switches.";
}
export function updateContentForG13(title, desc) {
    title.textContent = "G13 – Boron Group";
    desc.textContent = "Now correctly placed here, this includes boron, aluminum, gallium, and others. Boron is a metalloid; others are metals. Aluminum is abundant and used in packaging, construction, and transportation.";
}
export function updateContentForG14(title, desc) {
    title.textContent = "G14 – Carbon Group";
    desc.textContent = "Carbon (nonmetal), silicon and germanium (metalloids), tin and lead (metals). Carbon is the backbone of organic chemistry. Silicon is key in electronics. Lead is used in batteries and radiation shielding.";
}
export function updateContentForG15(title, desc) {
    title.textContent = "G15 – Nitrogen Group (Pnictogens)";
    desc.textContent = "Ranging from nonmetallic nitrogen and phosphorus to metallic bismuth. These elements have five valence electrons and participate in many biological and industrial processes.";
}
export function updateContentForG16(title, desc) {
    title.textContent = "G16 – Oxygen Group (Chalcogens)";
    desc.textContent = "Oxygen, sulfur, selenium, etc. Oxygen is vital for life; sulfur is used in rubber and fertilizers. These elements can act as oxidizers and are found in many biological molecules.";
}
export function updateContentForG17(title, desc) {
    title.textContent = "G17 – Halogens";
    desc.textContent = "Highly reactive nonmetals like fluorine, chlorine, and iodine. Form -1 ions and are used in disinfectants, salts, and organic chemistry. Reactivity decreases down the group.";
}
export function updateContentForG18(title, desc) {
    title.textContent = "G18 – Noble Gases";
    desc.textContent = "Inert gases like helium, neon, and argon. Extremely low reactivity due to full outer electron shells. Used in lighting, welding, and cryogenics.";
}
export function updateContentForP1(title, desc) {
    title.textContent = "Period 1";
    desc.textContent = "Contains only two elements: hydrogen and helium.Hydrogen, though placed with Group 1, is a unique nonmetal with one electron and versatile bonding. Helium is a noble gas with a complete outer shell, making it extremely stable and inert. These two elements represent the simplest atomic structures in the periodic table.";
}
export function updateContentForP2(title, desc) {
    title.textContent = "Period 2";
    desc.textContent = "Includes lithium to neon (Li to Ne), introducing the first complete p-block. Elements gradually fill the 2s and 2p orbitals. Properties range from reactive metals (Li, Be) to essential nonmetals (C, N, O), and end with neon, a noble gas. Covalent bonding becomes common. Period 2 forms the foundation of organic and biological chemistry.";
}
export function updateContentForP3(title, desc) {
    title.textContent = "Period 3";
    desc.textContent = "Spanning sodium to argon (Na to Ar), this period mimics Period 2 trends with a full 3rd shell. Metals like sodium and magnesium are followed by nonmetals like phosphorus, sulfur, and chlorine. Silicon appears as a key metalloid, widely used in electronics. Argon ends the period as a noble gas with high chemical stability.";
}
export function updateContentForP4(title, desc) {
    title.textContent = "Period 4";
    desc.textContent = "From potassium to krypton (K to Kr), this period introduces the first full row of transition metals. The 3d block includes important industrial elements like iron, copper, and zinc. There's a rich variety of oxidation states and bonding behavior. The period ends with krypton, a noble gas. Properties diversify rapidly from left to right.";
}
export function updateContentForP5(title, desc) {
    title.textContent = "Period 5";
    desc.textContent = "Extending from rubidium to xenon (Rb to Xe), this period includes the 4d transition metals. Silver and palladium stand out for their electrical conductivity and resistance to corrosion. Tin and antimony showcase the metalloid and metal transition in the p-block. Xenon, though a noble gas, can form rare compounds under extreme conditions.";
}
export function updateContentForP6(title, desc) {
    title.textContent = "Period 6";
    desc.textContent = "A longer period, running cesium to radon (Cs to Rn), it contains the 5d transition metals and the lanthanide series (La to Lu). Lanthanides are known for their magnetic and phosphorescent properties. Heavy metals like gold, platinum, and lead dominate the second half. Radon is a radioactive noble gas. This period is critical in advanced technologies and materials science.";
}
export function updateContentForP7(title, desc) {
    title.textContent = "Period 7";
    desc.textContent = "From francium to oganesson (Fr to Og), this period includes the 6d transition metals and the actinide series (Ac to Lr). Most elements are synthetic and radioactive, especially beyond uranium. Actinides like thorium and plutonium are key in nuclear applications. The transactinides (elements 104–118) are studied mainly for theoretical and experimental purposes due to their instability and rarity.";
}
export function updateContentForS(title, desc) {
    title.textContent = "s-Block Elements (Groups 1, 2, and Helium)";
    desc.textContent = "The s-block includes highly reactive metals like lithium, sodium, magnesium, and calcium, as well as helium. Their outermost electrons occupy the s-orbital. These elements are soft, have low ionization energies, and readily form positive ions. They're vital in biological systems, alloys, batteries, and chemical industries.";
}
export function updateContentForP(title, desc) {
    title.textContent = "p-Block Elements (Groups 13–18)";
    desc.textContent = "This block hosts a wide range of elements: nonmetals, metalloids, and metals like carbon, nitrogen, fluorine, and lead. The p-orbital fills across each period. These elements show varied oxidation states, form covalent bonds, and are central to life, electronics, semiconductors, and industrial chemistry.";
}
export function updateContentForD(title, desc) {
    title.textContent = "d-Block Elements (Groups 3–12)";
    desc.textContent = "Known as transition metals, d-block elements include iron, copper, silver, and gold. They exhibit multiple oxidation states and often form colored compounds. These metals are strong, conductive, and catalytically active, making them essential in construction, electronics, catalysis, and manufacturing industries.";
}
export function updateContentForF(title, desc) {
    title.textContent = "f-Block Elements (Lanthanides and Actinides)";
    desc.textContent = "The f-block contains lanthanides and actinides, filling the 4f and 5f orbitals. These elements are mostly radioactive and synthetic beyond uranium. Lanthanides are used in magnets and phosphors, while actinides are key in nuclear energy. Their chemistry is complex due to shielding and electron configurations.";
}
export function updateContentForMetal(title, desc) {
    title.textContent = "Metals";
    desc.textContent = "Metals are typically solid, shiny, malleable, and good conductors of heat and electricity. They tend to lose electrons, forming positive ions. Found mostly on the left and center of the periodic table, metals are essential in construction, tools, wiring, vehicles, and countless industrial and technological applications.";
}
export function updateContentForNonMetal(title, desc) {
    title.textContent = "Nonmetals";
    desc.textContent = "Nonmetals are generally poor conductors of heat and electricity and can be gases, liquids, or brittle solids. They tend to gain or share electrons in reactions. Found on the right side of the periodic table, they play critical roles in biology, the environment, and various chemical industries.";
}
export function updateContentForLanthanoid(title, desc) {
    title.textContent = "Lanthanoids (Lanthanides)";
    desc.textContent = "Lanthanoids include elements from lanthanum (La) to lutetium (Lu). They are shiny, silvery-white metals, known for their high reactivity and strong magnetic and luminescent properties. Commonly used in powerful magnets, lasers, and phosphors for screens and LEDs. They exhibit similar chemical behavior and mainly show a +3 oxidation state.";
}
export function updateContentForActinoid(title, desc) {
    title.textContent = "Actinoids (Actinides)";
    desc.textContent = "Actinoids range from actinium (Ac) to lawrencium (Lr). Most are radioactive and include key nuclear elements like uranium and plutonium. They have complex electron configurations and can show multiple oxidation states. Used in nuclear energy, weaponry, and research, actinoids are mostly synthetic and highly unstable beyond uranium.";
}
export function updateContent(title, desc) {
    title.textContent = "Periodic Table";
    desc.textContent = "The periodic table organizes all known chemical elements by increasing atomic number and recurring chemical properties. It’s arranged in rows (periods) and columns (groups) that reflect electron configurations and element behavior. This layout helps predict element characteristics, bonding, and reactivity across metals, nonmetals, and metalloids.";
}
export function updateValues(element)
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