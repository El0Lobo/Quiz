window.questions = [
  {
    "category": "Intermolecular Interactions",
    "question": "Which interactions are collectively referred to as van der Waals forces?",
    "choices": [
      "Keesom, Debye, and London dispersion",
      "Hydrogen bonding, ion pairing, and π–π stacking",
      "Electrostatic double-layer and steric repulsion",
      "Covalent bonding and metallic bonding"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "vdW = permanent dipole–dipole (Keesom), dipole–induced dipole (Debye), and instantaneous-dipole dispersion (London)."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "London dispersion interaction energy between small molecules falls off approximately as…",
    "choices": [
      "<math display='inline'><mfrac><mn>1</mn><mi>r</mi></mfrac></math>",
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>3</mn></msup></mfrac></math>",
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>6</mn></msup></mfrac></math>",
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>12</mn></msup></mfrac></math>"
    ],
    "correctIndex": 2,
    "points": 10,
    "explanation": "London dispersion $\\propto r^{-6}$ at long range for small polarizable species."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which statements about molecular polarizability are true?",
    "choices": [
      "It generally increases with atomic size and electron count",
      "It is enhanced by π-conjugation",
      "It is identical for all atoms in the periodic table",
      "It contributes to dispersion forces"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "Bigger, more diffuse electron clouds and delocalization increase $\\alpha$; dispersion strength grows roughly as $C_6\\propto \\alpha^2$."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "The ion–dipole interaction scales as…",
    "choices": [
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac></math> (orientation-averaged)",
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>4</mn></msup></mfrac></math>",
      "<math display='inline'><mfrac><mn>1</mn><mi>r</mi></mfrac></math>",
      "independent of distance"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Charge–dipole energy (averaged over thermal orientations) $\\propto r^{-2}$."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "The ion–induced dipole (charge–polarizable) interaction scales as…",
    "choices": [
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac></math>",
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>4</mn></msup></mfrac></math>",
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>6</mn></msup></mfrac></math>",
      "independent of polarizability"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Charge–induced dipole energy $\\propto \\alpha/r^{4}$."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Orientation-averaged dipole–dipole (Keesom) interactions scale as…",
    "choices": [
      "<math display='inline'><mfrac><mn>1</mn><mi>r</mi></mfrac></math>",
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>3</mn></msup></mfrac></math>",
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>6</mn></msup></mfrac></math>",
      "exponentially with r"
    ],
    "correctIndex": 2,
    "points": 10,
    "explanation": "Thermal averaging gives an $r^{-6}$ dependence for freely rotating dipoles."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which features strengthen a hydrogen bond?",
    "choices": [
      "Near-linearity of D–H···A (≈180°)",
      "Higher donor acidity and acceptor basicity",
      "Short H···A distance",
      "Substitution that removes all lone pairs from the acceptor"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Directionality and acid/base strength matter; no lone pair → no conventional H-bond."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Typical enthalpy scale for a single conventional hydrogen bond in solution is roughly…",
    "choices": [
      "0.1–1 kJ·mol⁻¹",
      "5–30 kJ·mol⁻¹",
      "80–200 kJ·mol⁻¹",
      "always exactly 41 kJ·mol⁻¹"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Most H-bonds lie in the ~5–30 kJ·mol⁻¹ range; context dependent."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Pauli (exchange) repulsion primarily arises from…",
    "choices": [
      "electrostatic attraction",
      "overlap of filled orbitals enforcing antisymmetry",
      "thermal motion of nuclei",
      "blackbody radiation"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Electron exchange antisymmetry penalizes overlap of occupied orbitals, giving short-range repulsion."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "In the Lennard–Jones 12–6 potential $V(r)=4\\varepsilon\\big[(\\sigma/r)^{12}-(\\sigma/r)^6\\big]$, the minimum occurs at…",
    "choices": [
      "$r=\\sigma$",
      "$r=2^{1/6}\\,\\sigma$",
      "$r=2\\,\\sigma$",
      "It has no minimum"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Differentiating $V(r)$ shows the minimum at $r=2^{1/6}\\sigma$ with depth $-\\varepsilon$."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "At very short separations the simple $C_6/r^6$ dispersion form breaks down because…",
    "choices": [
      "electrons disappear",
      "orbital overlap and damping reduce the long-range power law",
      "polarizability becomes infinite",
      "nuclei annihilate"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Short-range overlap requires damping functions; pure $r^{-6}$ is a long-range asymptote."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "The London $C_6$ coefficient for a pair of species increases mainly with…",
    "choices": [
      "larger static polarizability",
      "higher ionization energy only",
      "smaller electron count",
      "lower polarizability"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Roughly, $C_6\\propto \\alpha^2 I$; bigger, more polarizable species have larger dispersion."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which factors strengthen cation–π interactions?",
    "choices": [
      "Electron-rich aromatic rings",
      "Lower dielectric environment",
      "Bulky solvation shells tightly bound to the cation",
      "Ring deactivation by strong –NO₂ groups"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "Higher π electron density and weaker screening favor cation–π; strong deactivation and tight solvation weaken it."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Anion–π interactions are favored by…",
    "choices": [
      "electron-deficient π systems (positive quadrupole)",
      "strongly electron-rich rings",
      "always high-dielectric environments",
      "absence of substituent effects"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Anion–π requires electron-poor rings (e.g., perfluoroarenes) that present a positive quadrupole above the ring."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which statements about π–π stacking are correct?",
    "choices": [
      "Dispersion is a major contributor",
      "Electrostatic quadrupoles often favor offset (slipped) geometries",
      "Eclipsed face-to-face is always the strongest arrangement",
      "Substituents can tune stacking"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "Offset stacking reduces electrostatic repulsion; dispersion and substituent effects are key."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Halogen bonding typically involves…",
    "choices": [
      "a σ-hole on a covalently bound halogen acting as a Lewis acid",
      "the halogen as a pure electron donor only",
      "no directionality",
      "exclusive involvement of fluorine due to its size"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "The σ-hole along R–X (X = Cl, Br, I ≫ F) accepts electron density from a Lewis base; strongly directional."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Halogen-bond strength generally follows the trend…",
    "choices": [
      "F > Cl > Br > I",
      "I > Br > Cl ≫ F",
      "Cl ≈ I > Br ≫ F",
      "independent of the halogen"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Heavier halogens have more polarizable σ-holes and form stronger halogen bonds (environment-dependent)."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Chalcogen bonding (e.g., S, Se, Te) is characterized by…",
    "choices": [
      "σ-hole interactions opposite a covalent bond",
      "non-directional isotropic attraction only",
      "inability to engage lone pairs of acceptors",
      "identical strength to hydrogen bonds in all cases"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Like halogen bonds, σ-holes on chalcogens lead to directional Lewis-acidic interactions with bases."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "The hydrophobic effect in water is driven mostly by…",
    "choices": [
      "entropy gain of released water upon aggregation of nonpolar solutes",
      "formation of covalent bonds between solutes",
      "purely enthalpic stabilization of solute–water H-bonds",
      "Coulombic attraction between neutral species"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Clustering reduces the surface of structured water, releasing it and increasing entropy."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which salts are most likely to ‘salt out’ hydrophobes (Hofmeister effect)?",
    "choices": [
      "Strong kosmotropes (e.g., SO₄²⁻ with small cations)",
      "Strong chaotropes only",
      "Any salt equally",
      "Only organic salts"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Kosmotropes strengthen water structure and promote salting-out."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Increasing the dielectric constant of the medium usually…",
    "choices": [
      "strengthens ion–ion attraction",
      "weakens electrostatic interactions",
      "has no effect on dipolar interactions",
      "eliminates dispersion"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Electrostatic energies scale as $1/\\varepsilon$; higher $\\varepsilon$ screens charge-based interactions."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Decreasing ionic strength in solution generally…",
    "choices": [
      "shortens the Debye screening length",
      "lengthens the Debye screening length",
      "has no effect on double-layer screening",
      "destroys dispersion forces"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Lower $I$ → larger $\\kappa^{-1}$ → longer-ranged electrostatic interactions."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which factors reduce contact ion-pair formation in polar solvents?",
    "choices": [
      "High dielectric constant",
      "Strong solvation of ions",
      "Low temperature always",
      "Large counterions that are poorly solvated"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "High $\\varepsilon$ and strong solvation favor separated or solvent-shared pairs; large weakly solvated ions can still pair."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "The Hamaker constant characterizes…",
    "choices": [
      "strength of dispersion between macroscopic bodies",
      "electrochemical potential",
      "purely covalent bond energies",
      "magnetic exchange only"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "$A_\\mathrm{H}$ sets vdW attraction between bodies across a medium (continuum description)."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Lorentz–Berthelot combining rules (classical force fields) commonly use…",
    "choices": [
      "Arithmetic mean for σ and geometric mean for ε",
      "Geometric mean for σ and arithmetic mean for ε",
      "Both arithmetic means",
      "Both geometric means"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Standard LB: $\\sigma_{ij}=(\\sigma_i+\\sigma_j)/2$, $\\varepsilon_{ij}=(\\varepsilon_i\\varepsilon_j)^{1/2}$."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "For the Lennard–Jones potential, the repulsive term proportional to $(\\sigma/r)^{12}$ represents…",
    "choices": [
      "dispersion",
      "Pauli repulsion",
      "induction",
      "ionic attraction"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "The 12-power is an empirical short-range repulsion mimicking exchange repulsion."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which changes typically increase dispersion attractions between two organic molecules?",
    "choices": [
      "Increasing conjugation length",
      "Introducing heavy atoms",
      "Switching to a very low-polarizability environment",
      "Shorter intermolecular separation (not overlapping)"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "More electrons/conjugation and closer (non-overlapping) contact raise dispersion; environment affects net free energy via competition."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which is NOT a noncovalent interaction?",
    "choices": [
      "Hydrogen bonding",
      "Cation–π attraction",
      "Coordinate covalent metal–ligand bond",
      "Halogen bonding"
    ],
    "correctIndex": 2,
    "points": 10,
    "explanation": "Coordinate bonds are typically treated as covalent/semicovalent, not purely noncovalent."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Dipole–induced dipole (Debye) interactions scale as…",
    "choices": [
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>4</mn></msup></mfrac></math>",
      "<math display='inline'><mfrac><mn>1</mn><msup><mi>r</mi><mn>6</mn></msup></mfrac></math>",
      "independent of r",
      "<math display='inline'><mfrac><mn>1</mn><mi>r</mi></mfrac></math>"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "For an isotropic polarizable partner and thermal averaging, induction tends to scale as $r^{-6}$."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Salt bridges in proteins are best described as…",
    "choices": [
      "pure hydrogen bonds",
      "Coulombic interactions often coupled with H-bonding",
      "metallic bonds",
      "dispersion-only contacts"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "They are ion pairs frequently stabilized by geometrically aligned H-bonds and local environment."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which factors generally strengthen anion recognition by a receptor cavity?",
    "choices": [
      "Positive electrostatic potential inside the cavity",
      "Directional H-bond donors oriented toward the anion",
      "A very high dielectric in the cavity",
      "Size/shape complementarity"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "Electrostatics, directionality, and fit matter; low $\\varepsilon$ cavities often favor binding."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which trend usually increases hydrophobic aggregation in water?",
    "choices": [
      "Raising temperature moderately",
      "Adding kosmotropic salts",
      "Adding chaotropic salts only",
      "Lowering dielectric constant of the solvent"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "Moderate $T$ often enhances the entropy advantage; kosmotropes also promote salting-out."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Electrostatic potential energy for two point charges in a medium is proportional to…",
    "choices": [
      "<math display='inline'><mfrac><mrow><msub><mi>z</mi><mn>1</mn></msub><msub><mi>z</mi><mn>2</mn></msub></mrow><mrow><mi>ε</mi><mi>r</mi></mrow></mfrac></math>",
      "<math display='inline'><mrow><mi>ε</mi><mi>r</mi></mrow></math>",
      "<math display='inline'><mfrac><mi>ε</mi><mrow><msub><mi>z</mi><mn>1</mn></msub><msub><mi>z</mi><mn>2</mn></msub></mrow></mfrac></math>",
      "independent of ε"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Coulombic energy $\\propto z_1 z_2/(\\varepsilon r)$."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which statements about cooperative hydrogen bonding are correct?",
    "choices": [
      "Networks of H-bonds can strengthen individual bonds",
      "Conformation can shift to maximize cooperativity",
      "Cooperativity is impossible in cyclic arrays",
      "Solvent can modulate cooperativity"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "Chains/rings often show cooperativity; solvent competition reduces it."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Water near small hydrophobes is best described as…",
    "choices": [
      "more ordered relative to bulk (lower entropy)",
      "less ordered (higher entropy)",
      "chemically bound to the solute",
      "completely unaffected"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Hydration shells around small hydrophobes are more structured, driving aggregation to release ordered water."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which interactions are primarily responsible for noble-gas dimer binding at low temperature?",
    "choices": [
      "Covalent bonding",
      "London dispersion",
      "Hydrogen bonding",
      "Ionic bonding"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Rare-gas dimers (e.g., Ar₂) are bound by dispersion."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which modifications typically increase cation–π binding to benzene in the gas phase?",
    "choices": [
      "Increasing cation charge",
      "Increasing ring electron density",
      "Adding electron-withdrawing substituents",
      "Placing the cation farther from the ring centroid"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "Higher charge and electron-rich π clouds strengthen the interaction; EWG substituents and distance reduce it."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "In classical force fields, dispersion attraction is often represented by the term…",
    "choices": [
      "$+C_{12}/r^{12}$",
      "$-C_6/r^6$",
      "$+C_4/r^4$",
      "a constant offset"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "The attractive tail is $-C_6/r^6$ (or the $(\\sigma/r)^6$ term in LJ)."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which pairs of functional groups commonly form strong hydrogen bonds?",
    "choices": [
      "Carboxylic acid (donor) with carbonyl oxygen (acceptor)",
      "Amide N–H (donor) with carbonyl O (acceptor)",
      "Alkane C–H as a strong donor",
      "Phenol O–H with pyridine N (acceptor)"
    ],
    "correctIndices": [1,3],
    "points": 10,
    "explanation": "Amide and phenol donors with good acceptors are strong; alkane C–H is weak."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which statement about halogen bonds vs hydrogen bonds is most accurate?",
    "choices": [
      "Both are directional σ-hole interactions with a Lewis base",
      "Only hydrogen bonds are directional",
      "Halogen bonds cannot be tuned by substituents",
      "Hydrogen bonds require halogens"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Both involve anisotropic electrostatics; substituents tune σ-hole depth and H-bond acidity."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "In host–guest chemistry, what drives selectivity besides electrostatics?",
    "choices": [
      "Size/shape complementarity",
      "Hydrogen bond patterns",
      "Dispersion contact area",
      "None of the above"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Fit plus directional and dispersion interactions together determine selectivity."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which statement about dispersion in water is correct?",
    "choices": [
      "Dispersion does not exist in water",
      "Dispersion always dominates over hydrogen bonding",
      "Dispersion exists but is often masked by stronger specific interactions",
      "Dispersion is purely entropic"
    ],
    "correctIndex": 2,
    "points": 10,
    "explanation": "Dispersion contributes in any medium; in water its effect on free energy can be overshadowed by H-bonds and hydrophobicity."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "For two neutral polar molecules at high temperature, which long-range interaction dominates?",
    "choices": [
      "Keesom (dipole–dipole, orientation-averaged)",
      "Purely covalent",
      "Ionic",
      "Magnetic only"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Dipole–dipole (averaged) and dispersion both contribute; for strong dipoles, Keesom is significant."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which parameters in the Lennard–Jones model set contact distance and well depth?",
    "choices": [
      "σ sets contact distance; ε sets well depth",
      "ε sets distance; σ sets depth",
      "Both σ and ε set only distance",
      "Both set only depth"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "σ controls the size scale; ε the attraction strength."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which statements about charge–transfer (CT) contributions are correct?",
    "choices": [
      "CT can contribute to halogen and hydrogen bonds",
      "CT is purely magnetic",
      "CT is impossible between closed-shell partners",
      "CT often aligns with the bond axis"
    ],
    "correctIndices": [0,3],
    "points": 10,
    "explanation": "Small donor→acceptor CT components can stabilize σ-hole and H-bonds along the axis."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "The reduced second virial coefficient $B_2$ for a gas is negative when…",
    "choices": [
      "net attractions dominate",
      "net repulsions dominate",
      "there are no interactions",
      "the gas is ideal"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Negative $B_2$ indicates effective attractions (e.g., near condensation)."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which interaction typically has the longest range in condensed phases (for the same charge magnitude)?",
    "choices": [
      "Ion–ion Coulombic",
      "Dispersion",
      "Hydrogen bonding",
      "Steric repulsion"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Coulombic terms decay most slowly; screening reduces but does not remove long-range nature."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which changes usually weaken hydrogen bonds in organic solvents?",
    "choices": [
      "Adding a strong H-bond-accepting cosolvent",
      "Increasing temperature",
      "Lowering solvent polarity always",
      "Reducing steric hindrance around donor/acceptor"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "Competitive solvation and thermal disruption reduce H-bond strength; sterics also matter."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which pair shows predominantly dispersion-driven association?",
    "choices": [
      "n-alkane with perfluoroalkane (segregates due to weak cross-dispersion)",
      "two long n-alkanes",
      "ionic liquid cation with anion",
      "water with sodium chloride"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Hydrocarbon chains pack via dispersion; hydrocarbon–perfluoro interactions are weaker than like–like."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which statements about σ-hole depth are correct?",
    "choices": [
      "It increases with polarizability of the halogen",
      "Electron-withdrawing substituents on the halogen donor increase it",
      "It is uniform over the halogen surface",
      "It can be visualized on electrostatic potential maps"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "σ-hole magnitude is anisotropic and tunable by substituents and element."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which interactions are largely directional?",
    "choices": [
      "Hydrogen bonding",
      "Halogen bonding",
      "Dispersion",
      "Cation–π"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "H-bonds and σ-hole interactions have preferred axes; dispersion is broadly non-directional; cation–π is less strictly directional."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "A common reason π–π ‘sandwich’ geometry is less favored than offset stacking is…",
    "choices": [
      "increased repulsive electrostatics between ring quadrupoles",
      "absence of dispersion in the sandwich",
      "lack of any steric effects",
      "magnetic interactions dominate"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Quadrupole–quadrupole repulsion in a perfect eclipse is relieved by slip."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which factors typically stabilize ion pairs in low-dielectric media?",
    "choices": [
      "Lower ε",
      "Tight counterion size match",
      "Strong solvation by a polar cosolvent",
      "Multiple secondary contacts (e.g., H-bonds)"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "Low $\\varepsilon$ and favorable packing/secondary interactions stabilize ion pairing; polar solvation opposes it."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which is a reasonable qualitative order of noncovalent interaction strengths (typical, in solution)?",
    "choices": [
      "Ionic > hydrogen bond ≳ halogen bond > dispersion",
      "Dispersion > ionic > hydrogen bond > halogen bond",
      "Hydrogen bond > ionic > dispersion",
      "All are identical"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Very context dependent, but ionic is often strongest; specific H-/σ-hole bonds beat pure dispersion."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Why are perfluoroalkyl chains poorly miscible with hydrocarbon chains?",
    "choices": [
      "Cross-dispersion interactions are weaker than like–like dispersion",
      "Electrostatic repulsion between neutral chains",
      "Strong hydrogen bonding between fluorocarbons",
      "They always react covalently"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Fluorocarbons are less polarizable; unlike–unlike dispersion is weaker, promoting segregation."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "In water, the driving force for micelle formation of surfactants is mostly…",
    "choices": [
      "entropy gain of water released from hydrophobic surfaces",
      "formation of covalent bonds among tails",
      "purely electrostatic attraction between heads",
      "increase of tail–water hydrogen bonds"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Hydrophobic aggregation releases ordered water, increasing entropy."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which statements about induction (polarization) are correct?",
    "choices": [
      "It depends on the polarizability of the partner",
      "It can be stabilized by alignment with an external field",
      "It is always repulsive",
      "It contributes to ion–molecule interactions"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "Induction is attractive; stronger with larger $\\alpha$ and favorable fields."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which change often increases π–π stacking between two arenes?",
    "choices": [
      "Increasing contact area (larger fused rings)",
      "Adding bulky groups that force separation",
      "Introducing alternating donors/acceptors to reduce electrostatic repulsion",
      "Placing them farther apart"
    ],
    "correctIndices": [0,2],
    "points": 10,
    "explanation": "Bigger contact and donor–acceptor complementarity aid stacking; steric bulk and distance weaken it."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which pair of interactions has the same asymptotic distance dependence (for small molecules)?",
    "choices": [
      "Keesom and London dispersion",
      "Ion–dipole and ion–induced dipole",
      "Hydrogen bond and Coulombic",
      "Cation–π and Pauli repulsion"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "Both average to $\\sim r^{-6}$ (though with different constants/origin)."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which environmental changes usually strengthen halogen bonding?",
    "choices": [
      "Electron-withdrawing groups on the halogen donor",
      "Using heavier halogens",
      "Placing the complex in a very high dielectric cavity",
      "Linear approach of the base along R–X extension"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "EWG deepen σ-holes; I > Br > Cl; alignment along the σ-hole axis maximizes interaction."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which is a typical signature of strong H-bonding in IR spectra?",
    "choices": [
      "Red shift and band broadening of X–H stretch",
      "Blue shift and strong narrowing of X–H stretch",
      "Appearance of sharp overtones only",
      "No change at all"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "H-bonding weakens X–H, lowering $\\nu$ and broadening due to inhomogeneity."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "For a charge–quadrupole interaction (averaged over orientations), the distance dependence is steeper than…",
    "choices": [
      "1/r",
      "1/r^2",
      "1/r^3",
      "It is identical to 1/r"
    ],
    "correctIndex": 2,
    "points": 10,
    "explanation": "Higher multipoles decay more steeply; charge–quadrupole falls off $\\sim 1/r^{3}$ (or steeper with averaging)."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which solvent property tends to weaken cation–π interactions in solution?",
    "choices": [
      "High dielectric constant",
      "Low dielectric constant",
      "Low polarizability of the solvent",
      "Hydrogen-bond donating ability only"
    ],
    "correctIndex": 0,
    "points": 10,
    "explanation": "High $\\varepsilon$ screens electrostatics and favors cation solvation, reducing effective cation–π binding."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "Which description of steric (excluded volume) effects is most accurate?",
    "choices": [
      "Always attractive",
      "Always repulsive at short range due to overlap prevention",
      "Independent of molecular shape",
      "Dominant only at infinite separation"
    ],
    "correctIndex": 1,
    "points": 10,
    "explanation": "Steric exclusion manifests as short-range repulsion (Pauli + geometric)."
  },
  {
    "category": "Intermolecular Interactions",
    "question": "The free energy of binding in solution reflects…",
    "choices": [
      "Enthalpy (specific interactions) only",
      "Entropy (solvent + conformational) only",
      "Both enthalpy and entropy, including desolvation",
      "Only dispersion"
    ],
    "correctIndex": 2,
    "points": 10,
    "explanation": "$\\Delta G = \\Delta H - T\\,\\Delta S$ includes interaction enthalpies and solvent/conformational entropy changes."
  },

  /* IR (12) */
  {
    "category": "Spectroscopy – IR",
    "question": "A fundamental vibration is IR-active when there is a change in…",
    "choices": [
      "molecular dipole moment $\\mu$ along the normal coordinate",
      "molecular polarizability $\\alpha$ only",
      "molecular mass only",
      "refractive index of the solvent"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "IR selection rule: $\\partial\\mu/\\partial Q\\neq 0$."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "A sharp, intense band near $\\tilde\\nu\\,\\approx\\,1700\\,\\mathrm{cm}^{-1}$ is most characteristic of…",
    "choices": [
      "C=O stretch (carbonyl)",
      "O–H stretch (alcohol)",
      "C\\equiv C stretch (alkyne)",
      "C–H stretch (alkanes)"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Typical carbonyls absorb near 1650–1750 $\\mathrm{cm}^{-1}$ depending on conjugation/substitution."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "Conjugation of a carbonyl group with a C=C generally causes the C=O stretch to…",
    "choices": [
      "shift to lower wavenumber (red-shift)",
      "shift to higher wavenumber (blue-shift)",
      "disappear",
      "split into a doublet by Fermi resonance only"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Conjugation delocalizes the C=O bond, lowering the force constant $k$ and thus $\\tilde\\nu\\propto\\sqrt{k}$."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "Hydrogen bonding of O–H typically produces which spectral change(s)?",
    "choices": [
      "Red-shift of the stretch",
      "Broadening of the band",
      "Loss of all overtone transitions",
      "Blue-shift and narrowing"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "H-bonding weakens O–H, red-shifting and increasing inhomogeneous broadening."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "Which wavenumber region best matches terminal alkyne C\\equivC stretch?",
    "choices": [
      "2100–2260 $\\mathrm{cm}^{-1}$",
      "3300–3600 $\\mathrm{cm}^{-1}$",
      "1600–1680 $\\mathrm{cm}^{-1}$",
      "600–800 $\\mathrm{cm}^{-1}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "C≡C stretches appear in 2100–2260 $\\mathrm{cm}^{-1}$; terminal ≡C–H is near 3300 $\\mathrm{cm}^{-1}$."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "The mutual exclusion principle states that in a perfectly centrosymmetric molecule…",
    "choices": [
      "gerade (g) vibrations are IR-inactive and Raman-active",
      "ungerade (u) vibrations are Raman-inactive and IR-inactive",
      "all bending modes are inactive in IR",
      "all stretching modes are Raman-inactive"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "For $i$ symmetry, IR and Raman activities are mutually exclusive."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "Anharmonicity leads to which phenomena?",
    "choices": [
      "Overtones (\\(2\\nu,3\\nu,\\dots\\))",
      "Combination bands",
      "Decreasing level spacing at higher $v$",
      "Strict $\\Delta v=\\pm1$ rule"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "The harmonic $\\Delta v=\\pm1$ rule is relaxed by anharmonicity."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "In ATR-IR, the penetration depth $d_p$ of the evanescent wave…",
    "choices": [
      "increases with increasing wavelength $\\lambda$",
      "decreases with increasing $\\lambda$",
      "is independent of refractive index contrast",
      "is independent of incidence angle"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$d_p\\propto \\lambda/(n_1\\sqrt{\\sin^2\\theta-(n_2/n_1)^2})$; longer $\\lambda$ gives deeper penetration."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "Which functional group typically gives a strong, sharp band at $\\approx\\,2250\\,\\mathrm{cm}^{-1}$?",
    "choices": [
      "Nitrile C\\equiv N",
      "Amide C=O",
      "Aromatic C=C",
      "Ether C–O–C"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Nitrile stretches appear near 2210–2260 $\\mathrm{cm}^{-1}$."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "Fermi resonance occurs when…",
    "choices": [
      "a fundamental is near an overtone/combination band of similar symmetry",
      "two unrelated modes are far apart",
      "the sample is crystalline",
      "the concentration is very low"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Level mixing causes intensity borrowing and splitting."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "Which statements about isotopic substitution are correct?",
    "choices": [
      "Heavier isotopes lower $\\tilde\\nu$",
      "Shifts are largest when the isotoped atom participates strongly in the mode",
      "Selection rules change fundamentally",
      "Band intensities can be slightly affected via coupling"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "$\\tilde\\nu\\propto\\sqrt{k/\\mu}$; larger reduced mass $\\mu$ reduces frequency."
  },
  {
    "category": "Spectroscopy – IR",
    "question": "Which pattern best distinguishes primary vs secondary alcohol O–H stretches (neat)?",
    "choices": [
      "Both show very broad bands; primary often slightly broader due to stronger H-bond networks",
      "Primary shows a sharp doublet at 1700 $\\mathrm{cm}^{-1}$",
      "Secondary lacks any O–H stretch",
      "Only tertiary shows broad O–H"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Hydrogen-bond networks differ; exact profiles depend on concentration/solvent."
  },

  /* NMR (16) */
  {
    "category": "Spectroscopy – NMR",
    "question": "First-order multiplet analysis (n+1 rule) is valid when…",
    "choices": [
      "$|\\Delta\\nu|\\gg J$ (in Hz)",
      "$J\\gg|\\Delta\\nu|$",
      "$|\\Delta\\nu|\\approx J$",
      "strong chemical exchange is present"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Large chemical-shift separation relative to coupling yields first-order patterns."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "The ¹H chemical shift reference (0 ppm) in most organic solvents is…",
    "choices": ["TMS (tetramethylsilane)", "DSS", "HDO peak", "Residual CHCl₃ at 7.26 ppm"],
    "correctIndices": [0],
    "points": 10,
    "explanation": "TMS defines 0 ppm for many nuclei in organic media."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "Which statements about T₁ and T₂ are correct?",
    "choices": [
      "$T_1$ is spin–lattice (longitudinal) relaxation",
      "$T_2$ is spin–spin (transverse) relaxation",
      "Short $T_2$ broadens lines",
      "$T_2\\ge T_1$ for most liquids"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Generally $T_2\\le T_1$; dephasing (short $T_2$) increases linewidth."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "A ¹H quartet at ~4.1 ppm (J ≈ 7 Hz) and a triplet at ~1.2 ppm (J ≈ 7 Hz) suggest…",
    "choices": ["an ethyl group –O–CH₂–CH₃", "an isopropyl group", "an aldehyde", "an aromatic ring"],
    "correctIndices": [0],
    "points": 10,
    "explanation": "O–CH₂–CH₃ shows CH₂ quartet (to 3H) and CH₃ triplet (to 2H) with matching J."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "In ¹³C NMR, broadband proton decoupling primarily…",
    "choices": [
      "collapses $^{1}\\!J_{CH}$ splittings to singlets and enhances NOE",
      "generates scalar couplings",
      "lengthens acquisition indefinitely",
      "prevents quantitative integration automatically"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Decoupling simplifies spectra and boosts ¹³C via NOE; quantitative work uses inverse-gated decoupling."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "Which 2D experiment correlates directly bonded X–H pairs vs longer-range (2–3J) pairs?",
    "choices": ["HSQC vs HMBC", "COSY vs NOESY", "DEPT vs INADEQUATE", "TOCSY vs ROESY"],
    "correctIndices": [0],
    "points": 10,
    "explanation": "HSQC: 1-bond correlations; HMBC: multiple-bond heteronuclear couplings."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "Chemical exchange on the NMR timescale near coalescence typically causes…",
    "choices": [
      "line broadening and eventual peak merging",
      "narrower lines",
      "unchanged multiplets",
      "only baseline noise increase"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "As $k_{ex}$ approaches $\\Delta\\omega$, peaks broaden and coalesce."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "For quantitative ¹³C integration one should…",
    "choices": [
      "use long relaxation delays ($\\ge 5\\times T_1$)",
      "avoid NOE via inverse-gated decoupling",
      "always use DEPT-135 only",
      "use very short recycle delays"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "Long delays allow full relaxation; inverse-gated decoupling suppresses NOE bias."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "Which nuclei are commonly observed in small-molecule heteronuclear NMR?",
    "choices": ["¹³C", "¹⁵N", "³¹P", "¹²C"],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "¹³C, ¹5N, ³¹P are NMR-active; ¹²C is spin-0."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "The NOE primarily reports on…",
    "choices": [
      "through-space dipolar interactions within ~5 Å",
      "through-bond scalar couplings",
      "sample conductivity",
      "magic-angle spinning speed"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "NOE is a distance-dependent, through-space effect."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "Downfield (higher ppm) ¹H shifts are commonly caused by…",
    "choices": [
      "deshielding by electronegative substituents",
      "anisotropy near aromatic rings",
      "hydrogen bonding",
      "deuteration of the observed proton"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "All deshield; deuteration removes the proton and changes coupling, not its own shift."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "In DEPT-135, CH and CH₃ carbons appear…",
    "choices": [
      "positive while CH₂ appears negative; quaternary is absent",
      "negative while CH₂ positive; quaternary absent",
      "with identical phase for all carbons",
      "together with quaternary signals"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "DEPT filters by $^1J_{CH}$; quaternary carbons (no attached H) are suppressed."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "Which factors broaden NMR lines?",
    "choices": [
      "short $T_2$",
      "paramagnetic impurities",
      "strong field inhomogeneity/shimming errors",
      "long $T_1$"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Transverse relaxation, paramagnets, and $B_0$ inhomogeneity broaden; $T_1$ affects recovery."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "¹H–¹H COSY cross-peaks indicate…",
    "choices": [
      "scalar (J) couplings",
      "NOE contacts",
      "identical chemical shifts only",
      "exchange cross-peaks exclusively"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "COSY reveals through-bond scalar couplings (typically ³J)."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "For small molecules at high field, the sign of the steady-state ¹H→¹H NOE is usually…",
    "choices": ["positive (signal enhancement)", "negative", "exactly zero", "random"],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Typical $\\tau_c$ values produce positive NOE under common conditions."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "The $T_1$ inversion-recovery experiment measures…",
    "choices": [
      "longitudinal relaxation by following $M_z$ recovery after a 180° pulse",
      "transverse relaxation by spin echo decay",
      "diffusion coefficients",
      "chemical exchange rates only"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$\\pi$–wait–$\\pi/2$ monitors $M_z(t)=M_0\\big(1-2e^{-t/T_1}\\big)$."
  },
  {
    "category": "Spectroscopy – NMR",
    "question": "A typical ³¹P chemical shift range (phosphorus compounds) spans roughly…",
    "choices": [
      "$-400$ to $+400$ ppm depending on environment",
      "$-10$ to $+10$ ppm only",
      "0–40 ppm only",
      "exactly 0 ppm"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "³¹P is highly sensitive to oxidation state/ligand set; wide range."
  },

  /* UV–Vis (12) */
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Beer–Lambert law is $A=\\varepsilon\\,l\\,c$. Deviations commonly arise from…",
    "choices": [
      "very high concentrations (refractive index/association)",
      "chemical equilibria shifting with $c$",
      "stray light or detector saturation",
      "perfectly constant $\\varepsilon$ over the band"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Physical, chemical, and instrumental factors cause nonlinearity."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Relative to $\\pi\\to\\pi^*$, $n\\to\\pi^*$ transitions are typically…",
    "choices": [
      "lower in energy and less intense",
      "higher in energy and more intense",
      "same energy and intensity",
      "forbidden in all media"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$n\\to\\pi^*$ has weaker oscillator strength and often lower energy in carbonyls."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Increasing solvent polarity often causes (carbonyls)…",
    "choices": [
      "red-shift of $\\pi\\to\\pi^*$ and blue-shift of $n\\to\\pi^*$",
      "blue-shift of both",
      "no change",
      "only intensity changes"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Differential stabilization of ground/excited states shifts bands."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Which factors broaden UV–Vis absorption bands?",
    "choices": [
      "vibronic coupling",
      "solvent inhomogeneity",
      "short excited-state lifetimes (uncertainty broadening)",
      "extremely narrow monochromator slits"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Environmental distributions and lifetime effects broaden; narrower slits reduce instrumental broadening."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Charge-transfer (CT) bands are characterized by…",
    "choices": [
      "very large molar absorptivities",
      "transitions localized on a single atom only",
      "complete independence from solvent polarity",
      "exclusively in the IR"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "CT transitions often have high $\\varepsilon$ and show solvent sensitivity."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Bathochromic and hypsochromic shifts refer to…",
    "choices": [
      "red-shift (longer $\\lambda$) and blue-shift (shorter $\\lambda$), respectively",
      "intensity increase and decrease",
      "band narrowing and broadening",
      "pure vibrational effects"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Bathochromic = red-shift; hypsochromic = blue-shift."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Hyperchromic vs hypochromic effects describe…",
    "choices": [
      "increased vs decreased band intensity",
      "red vs blue shift",
      "appearance vs disappearance of overtones",
      "spin-forbidden vs spin-allowed transitions"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Chromic effects relate to intensity changes."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Extending $\\pi$-conjugation in a polyene typically…",
    "choices": [
      "red-shifts and intensifies the lowest $\\pi\\to\\pi^*$ band",
      "blue-shifts and decreases intensity",
      "has no effect",
      "eliminates vibronic structure"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Smaller HOMO–LUMO gaps and larger oscillator strength."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Exciton coupling in aggregates can produce…",
    "choices": [
      "Davydov splitting",
      "H-aggregate (blue-shift) and J-aggregate (red-shift) behavior",
      "loss of all absorption",
      "hyperfine structure"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "Excitonic interactions split/shift bands depending on geometry."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "A Tauc plot of $(\\alpha h\\nu)^n$ vs $h\\nu$ is used to estimate…",
    "choices": [
      "optical band gap of semiconductors/thin films",
      "fluorescence lifetime",
      "quantum yield",
      "oscillator strength"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Intercept of the linear region gives $E_g$ for appropriate $n$."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "The molar absorptivity has units…",
    "choices": [
      "$\\mathrm{L\\,mol^{-1}\\,cm^{-1}}$",
      "dimensionless",
      "$\\mathrm{cm^{-1}}$",
      "$\\mathrm{L\\,mol\\,cm}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "From $A=\\varepsilon l c$ with $l$ in cm and $c$ in mol L$^{-1}$."
  },
  {
    "category": "Spectroscopy – UV–Vis",
    "question": "Kasha’s rule states that…",
    "choices": [
      "fluorescence generally originates from the lowest excited singlet $S_1$",
      "phosphorescence originates from $S_2$",
      "absorption and emission occur at identical wavelengths",
      "emission lifetime is independent of environment"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Rapid internal conversion funnels population to $S_1$ before emission."
  },

  /* Electron Microscopy (10) */
  {
    "category": "Electron Microscopy",
    "question": "Compared to SEM, TEM typically offers…",
    "choices": [
      "higher spatial resolution and internal structural information",
      "lower spatial resolution but better surface sensitivity",
      "no need for vacuum",
      "direct vibrational spectroscopy"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "TEM transmits electrons through thin specimens to image internal structure with high resolution."
  },
  {
    "category": "Electron Microscopy",
    "question": "In SEM, image contrast can arise from…",
    "choices": [
      "secondary electrons (topography)",
      "backscattered electrons (Z-contrast)",
      "charging in insulating samples",
      "transmitted-electron phase contrast"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Transmitted-electron contrast is a TEM mode; SEM uses secondary/backscattered signals."
  },
  {
    "category": "Electron Microscopy",
    "question": "TEM sample preparation generally requires…",
    "choices": [
      "electron-transparent thickness (often <100 nm)",
      "no preparation at all",
      "heavy-metal staining for all inorganic materials",
      "cooling to liquid helium for every sample"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Electron transparency is essential; prep depends on material class."
  },
  {
    "category": "Electron Microscopy",
    "question": "EDS in SEM/TEM provides…",
    "choices": [
      "elemental analysis via characteristic X-rays",
      "vibrational spectra",
      "crystallographic orientation mapping only",
      "surface potential maps"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Characteristic X-rays identify elements; EELS provides fine-structure/edges."
  },
  {
    "category": "Electron Microscopy",
    "question": "Raising accelerating voltage generally…",
    "choices": [
      "decreases electron wavelength and can improve resolution",
      "increases electron wavelength",
      "prevents beam damage",
      "eliminates the need for thin samples in TEM"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Shorter de Broglie wavelength at higher $V$; damage and multiple scattering are separate constraints."
  },
  {
    "category": "Electron Microscopy",
    "question": "STEM-HAADF imaging produces Z-contrast because…",
    "choices": [
      "high-angle scattered intensity scales roughly with atomic number",
      "secondary electrons dominate",
      "phase contrast in bright-field dominates",
      "no dependence on composition"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "High-angle annular dark-field emphasizes Rutherford-like scattering (\\(\\sim Z^{1.7}\\))."
  },
  {
    "category": "Electron Microscopy",
    "question": "Selected-Area Electron Diffraction (SAED) patterns provide…",
    "choices": [
      "reciprocal-space information for crystal structure",
      "real-space atomic images",
      "chemical bonding energies",
      "magnetic domain maps"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Spot/ring patterns encode lattice spacings and symmetry."
  },
  {
    "category": "Electron Microscopy",
    "question": "Charging in SEM can be mitigated by…",
    "choices": [
      "coating with a thin conductive layer (Au/Pd, C)",
      "using low-vacuum/variable-pressure modes",
      "lowering beam current/voltage",
      "increasing dwell time indefinitely"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Long dwell can worsen charging; coatings and environmental modes help."
  },
  {
    "category": "Electron Microscopy",
    "question": "Cryo-EM is particularly powerful for…",
    "choices": [
      "high-resolution structures of vitrified biological macromolecules",
      "bulk metals without thinning",
      "high-temperature metallurgy only",
      "vibrational spectroscopy of gases"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Rapid vitrification preserves native-like conformations."
  },
  {
    "category": "Electron Microscopy",
    "question": "Beam damage can be reduced by…",
    "choices": [
      "lowering electron dose (current, dwell, exposure)",
      "cooling the specimen",
      "using dose-fractionation strategies",
      "increasing spot size and dwell indiscriminately"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Dose management and cryo-methods mitigate radiolysis/knock-on damage."
  },




  {
    "category": "Statistical Thermodynamics",
    "question": "Boltzmann’s entropy formula is…",
    "choices": [
      "$S = k\\,\\ln \\Omega$",
      "$S = -k\\sum_i p_i\\ln p_i$ for microcanonical only",
      "$S = U/T$ always",
      "$S = k\\,\\Omega$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "For a microcanonical ensemble with multiplicity $\\Omega$, $S=k\\ln\\Omega$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "In the canonical ensemble the partition function is…",
    "choices": [
      "$Z=\\sum_i e^{-\\beta E_i}$",
      "$Z=\\int p\\,\\mathrm dp$",
      "$Z=\\sum_i p_i$ with $p_i$ arbitrary",
      "$Z= e^{\\beta U}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$p_i=e^{-\\beta E_i}/Z$ with $\\beta=1/(kT)$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Which relations are correct in the canonical ensemble? [Select all that apply]",
    "choices": [
      "$U= -\\,\\partial(\\ln Z)/\\partial\\beta$",
      "$A= -kT\\,\\ln Z$",
      "$S= -\\,(\\partial A/\\partial T)_{V,N}$",
      "$p= -\\,(\\partial A/\\partial V)_{T,N}$"
    ],
    "correctIndices": [0,1,2,3],
    "points": 10,
    "explanation": "All listed identities are standard canonical relations."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Equipartition theorem predicts per quadratic degree of freedom an average energy of…",
    "choices": [
      "$\\tfrac{1}{2}kT$",
      "$kT$",
      "$\\tfrac{3}{2}kT$",
      "0"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Each independent quadratic term contributes $\\tfrac12 kT$ to $U$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Sackur–Tetrode equation applies to…",
    "choices": [
      "ideal monatomic gases (entropy with quantum indistinguishability)",
      "any polyatomic gas including vibrations",
      "condensed phases",
      "ionic solutions only"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "It gives $S(N,V,T)$ for a monatomic ideal gas including the $1/N!$ correction."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Gibbs paradox is resolved by…",
    "choices": [
      "dividing the canonical $Z_N$ by $N!$ for indistinguishable particles",
      "adding an arbitrary constant to $S$",
      "ignoring mixing entirely",
      "setting $k\\to 0$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Indistinguishability ($1/N!$) makes entropy extensive and removes spurious mixing of identical gases."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Stirling’s approximation for large $N$ is…",
    "choices": [
      "$\\ln N! \\approx N\\ln N - N$",
      "$\\ln N! \\approx N$",
      "$\\ln N! \\approx \\ln N$",
      "$\\ln N! \\approx N^2$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Often used to simplify $\\ln(N!)$ in entropy/partition-function derivations."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For the translational partition function $q_\\mathrm{trans}$ of a single particle, which statements hold? [Select all that apply]",
    "choices": [
      "It is proportional to the volume $V$",
      "It scales as $T^{3/2}$",
      "It scales as $m^{3/2}$",
      "It is independent of $V$"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "$q_\\mathrm{trans} = V\\,(2\\pi m kT/h^2)^{3/2}$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For a linear rigid rotor at high $T$, the rotational partition function $q_\\mathrm{rot}$… [Select all that apply]",
    "choices": [
      "is inversely proportional to the symmetry number $\\sigma$",
      "increases with temperature",
      "depends linearly on volume",
      "is approximately $T/(\\sigma\\,\\theta_r)$"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "No $V$ dependence; $\\theta_r=\\hbar^2/(2Ik)$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For a harmonic oscillator mode, which statements are true? [Select all that apply]",
    "choices": [
      "There is a zero-point energy $\\tfrac12\\hbar\\omega$",
      "At low $T$, the thermal contribution to $U$ tends to 0",
      "At high $T$, equipartition gives $kT$ per mode",
      "Heat capacity per mode tends to $0$ as $T\\to\\infty$"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "High-$T$ limit: $U\\to kT$ per 1D HO; $C_V\\to k$ per mode."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "From $A=-kT\\ln Z$, the entropy is…",
    "choices": [
      "$S= -\\,(\\partial A/\\partial T)_{V,N}$",
      "$S= (\\partial A/\\partial V)_{T,N}$",
      "$S= -A/T$ exactly",
      "$S= \\partial (T\\ln Z)/\\partial T$ only at $V=0$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Direct differentiation yields $S= -\\partial A/\\partial T$ at fixed $V,N$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Energy fluctuations in the canonical ensemble satisfy…",
    "choices": [
      "$\\mathrm{Var}(E)=kT^2 C_V$",
      "$\\mathrm{Var}(E)=0$",
      "$\\mathrm{Var}(E)=U^2$",
      "$\\mathrm{Var}(E)=kT/C_V$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "A classic fluctuation–dissipation relation."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Two-level system with energies $0$ and $\\varepsilon$: the excited-state population is…",
    "choices": [
      "$p_1=\\dfrac{e^{-\\beta\\varepsilon}}{1+e^{-\\beta\\varepsilon}}$",
      "$p_1=\\dfrac{1}{1+e^{-\\beta\\varepsilon}}$",
      "$p_1=\\dfrac{1}{2}$ for all $T$",
      "$p_1= e^{-\\varepsilon/kT}$ (unnormalized)"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "With degeneracies $g_0=g_1=1$, $p_1= e^{-\\beta\\varepsilon}/(1+e^{-\\beta\\varepsilon})$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For a paramagnet of noninteracting spin-1/2 moments, the susceptibility at high $T$ obeys…",
    "choices": [
      "Curie law $\\chi\\propto 1/T$",
      "Curie–Weiss with positive $\\Theta$",
      "temperature independence",
      "exponential growth with $T$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Independent moments give Curie behavior."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Debye vs Einstein models for solids: which are correct? [Select all that apply]",
    "choices": [
      "Debye predicts $C_V\\propto T^3$ at low $T$",
      "Einstein predicts an activated rise from low $T$",
      "Both approach $3R$ per mole at high $T$",
      "Einstein predicts $C_V\\propto T^3$ at low $T$"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Debye: acoustic spectrum; Einstein: single frequency."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Which statements about MB/FD/BE are correct? [Select all that apply]",
    "choices": [
      "Fermi–Dirac obeys Pauli exclusion (0 or 1 per state)",
      "Bose–Einstein allows multiple occupancy",
      "At high $T$ and low density, all approach Maxwell–Boltzmann",
      "Maxwell–Boltzmann forbids multiple occupancy"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "MB is classical, no exclusion; FD/BE are quantum statistics."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "At $T=0$, a noninteracting 3D Fermi gas…",
    "choices": [
      "fills all states up to the Fermi energy $\\varepsilon_F$",
      "has Maxwell–Boltzmann occupancy",
      "has zero kinetic energy",
      "has undefined chemical potential"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "The Fermi sphere is filled up to $\\varepsilon_F$; $\\mu(T=0)=\\varepsilon_F$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "The chemical potential in the canonical ensemble is…",
    "choices": [
      "$\\mu = (\\partial A/\\partial N)_{T,V}$",
      "$\\mu = -kT\\ln Z$",
      "$\\mu = (\\partial U/\\partial T)_{N,V}$",
      "$\\mu$ is undefined"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Thermodynamic definition at fixed $T,V$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Grand partition function is…",
    "choices": [
      "$\\Xi = \\sum_{N=0}^{\\infty} z^N Z_N(T,V)$ with $z=e^{\\beta\\mu}$",
      "$\\Xi = Z^N$",
      "$\\Xi = e^{-\\beta U}$",
      "$\\Xi$ equals $Z_1$ only"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Grand canonical sum over particle number with fugacity $z$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For photons in equilibrium radiation, which holds? [Select all that apply]",
    "choices": [
      "the chemical potential is $\\mu=0$",
      "Bose–Einstein statistics apply",
      "total particle number is not conserved",
      "Fermi–Dirac statistics apply"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Photons are bosons with variable number; $\\mu=0$ in equilibrium blackbody radiation."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Bose–Einstein condensation (BEC) in an ideal gas is characterized by… [Select all that apply]",
    "choices": [
      "macroscopic occupation of the ground state below $T_c$",
      "occurs for noninteracting bosons",
      "requires $\\mu=0$ exactly at and below $T_c$",
      "occurs for ideal fermions"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Fermions cannot condense this way; for photons BEC is different due to nonconserved number."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "In the virial expansion, the compressibility factor $Z$ is…",
    "choices": [
      "$Z=\\dfrac{pV}{NkT}=1+ B_2(T)\\,\\dfrac{N}{V}+\\cdots$",
      "$Z=1$ for any interacting gas",
      "$Z=\\dfrac{NkT}{pV}$ always $<1$",
      "$Z=\\dfrac{p}{kT}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Deviations from ideality enter via virial coefficients $B_i(T)$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "A negative second virial coefficient $B_2(T)$ typically indicates…",
    "choices": [
      "net attractive interactions at that $T$",
      "net repulsive interactions",
      "no interactions",
      "instability of the gas"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Attractions make $Z<1$ (negative $B_2$)."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Which fluctuation–response statements are correct? [Select all that apply]",
    "choices": [
      "Energy variance is proportional to $C_V$ in the canonical ensemble",
      "Number fluctuations relate to isothermal compressibility in the grand ensemble",
      "Susceptibility relates to magnetization fluctuations",
      "No general link exists between fluctuations and response"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Core of fluctuation–dissipation relations."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Most probable speed $v_{mp}$ in a Maxwell–Boltzmann gas is…",
    "choices": [
      "$\\sqrt{2kT/m}$",
      "$\\sqrt{8kT/(\\pi m)}$",
      "$\\sqrt{3kT/m}$",
      "$\\sqrt{kT/m}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$v_{mp}=\\sqrt{2kT/m}$; mean speed is $\\sqrt{8kT/(\\pi m)}$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Entropy of mixing of two different ideal gases at equal $T,p$…",
    "choices": [
      "is positive and equals $-k\\sum_i N_i\\ln x_i$",
      "is zero",
      "is negative",
      "depends only on interaction potentials"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$\\Delta S_{mix}>0$ for mixing different species."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "The relation between standard free energy and equilibrium constant is…",
    "choices": [
      "$\\Delta G^\\circ = -kT\\ln K$",
      "$\\Delta G^\\circ = kT\\ln K$",
      "$K = e^{\\Delta H/(kT)}$",
      "$K = 1/\\Delta G^\\circ$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "From $\\Delta G = -kT\\ln K$ at equilibrium."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For $N$ noninteracting indistinguishable particles, the canonical partition function is…",
    "choices": [
      "$Z_N=\\dfrac{q^N}{N!}$",
      "$Z_N=q^N$",
      "$Z_N=N\\,q$",
      "$Z_N= q/N!$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$q$ is the single-particle partition function; divide by $N!$ for indistinguishability."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For a monatomic ideal gas, the heat capacity at constant volume is…",
    "choices": [
      "$C_V=\\tfrac{3}{2}Nk$",
      "$C_V=Nk$",
      "$C_V=\\tfrac{5}{2}Nk$",
      "$C_V=0$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Three translational quadratic DOF."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For a linear molecule, rotational contribution to $C_V$ at high $T$ is approximately…",
    "choices": [
      "$Nk$",
      "$\\tfrac{1}{2}Nk$",
      "$\\tfrac{3}{2}Nk$",
      "zero"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Two rotational DOF $\\Rightarrow C_V=Nk$ (equipartition)."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Pressure from the Helmholtz free energy is…",
    "choices": [
      "$p= -\\,(\\partial A/\\partial V)_{T,N}$",
      "$p= (\\partial U/\\partial V)_{T,N}$",
      "$p= A/V$",
      "$p= -\\,(\\partial S/\\partial V)_{T,N}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Direct thermodynamic derivative."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For an ideal gas, which statements are correct? [Select all that apply]",
    "choices": [
      "$U$ depends only on $T$",
      "$H=U+pV$",
      "$pV=NkT$",
      "$C_p-C_V = k$ per particle"
    ],
    "correctIndices": [0,1,2,3],
    "points": 10,
    "explanation": "All are ideal-gas identities; per mole, $C_p-C_V=R$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Classical regime for a gas requires…",
    "choices": [
      "$n\\ll n_Q$ with $n_Q=(mkT/2\\pi\\hbar^2)^{3/2}$",
      "$n\\gg n_Q$",
      "$n=n_Q$ exactly",
      "independent of $n$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Dilute compared to quantum concentration $n_Q$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Degeneracy affects probabilities by…",
    "choices": [
      "multiplying Boltzmann weights by $g_i$",
      "dividing Boltzmann weights by $g_i$",
      "leaving them unchanged",
      "forcing equal populations of all levels"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$p_i\\propto g_i e^{-\\beta E_i}$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Average translational kinetic energy per molecule in 3D is…",
    "choices": [
      "$\\tfrac{3}{2}kT$",
      "$kT$",
      "$\\tfrac{1}{2}kT$",
      "$3kT$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "From equipartition over three quadratic terms."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Mean speed $\\langle v\\rangle$ for a Maxwell gas is…",
    "choices": [
      "$\\sqrt{\\dfrac{8kT}{\\pi m}}$",
      "$\\sqrt{\\dfrac{2kT}{m}}$",
      "$\\sqrt{\\dfrac{3kT}{m}}$",
      "$\\sqrt{\\dfrac{kT}{m}}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$v_{mp}<\\langle v\\rangle< v_{rms}$; $\\langle v\\rangle=\\sqrt{8kT/(\\pi m)}$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Sackur–Tetrode implies that, at fixed $N$, the entropy of a monatomic ideal gas… [Select all that apply]",
    "choices": [
      "increases with $\\ln V$",
      "increases with $\\tfrac{3}{2}\\,\\ln T$",
      "is independent of $V$",
      "decreases with $T$"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "$S\\sim Nk[\\ln(V/N)+\\tfrac32\\ln T+\\text{const}]$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "At constant $T,V$, the equilibrium state minimizes…",
    "choices": [
      "Helmholtz free energy $A$",
      "Gibbs free energy $G$",
      "internal energy $U$",
      "entropy $S$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "At fixed $T,V$, $A$ is minimized; at fixed $T,p$, $G$ is minimized."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Microcanonical ensemble is defined by…",
    "choices": [
      "fixed $(E,V,N)$ with equal a priori probabilities",
      "fixed $(T,V,N)$",
      "fixed $(\\mu,V,T)$",
      "fixed $(p,T,N)$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "All accessible microstates at energy $E$ are equally likely."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "If the Hamiltonian separates into independent parts, then the canonical partition function…",
    "choices": [
      "factorizes into a product of partition functions",
      "is a sum of the parts",
      "is unchanged",
      "must be computed numerically"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Separable $H=H_1+H_2\\Rightarrow Z=Z_1 Z_2$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Rotational symmetry number $\\sigma$…",
    "choices": [
      "divides the rotational partition function",
      "multiplies the translational partition function",
      "has no effect on $q_\\mathrm{rot}$",
      "is always 1"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Avoids overcounting indistinguishable orientations."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Zero-point energy of a harmonic oscillator…",
    "choices": [
      "is $\\tfrac12\\hbar\\omega$ and temperature-independent",
      "vanishes at $T=0$",
      "diverges at high $T$",
      "equals $kT$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "ZPE is present even at absolute zero."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Einstein vs Debye temperatures $\\theta_E,\\theta_D$… [Select all that apply]",
    "choices": [
      "$\\theta_E$ characterizes a single-frequency model",
      "$\\theta_D$ sets the cutoff of the phonon spectrum",
      "Low-$T$ heat capacity is controlled by these scale temperatures",
      "They are exactly equal for all solids"
    ],
    "correctIndices": [0,1,3].slice(0,3),
    "points": 10,
    "explanation": "$\\theta_D$ and $\\theta_E$ define onset scales; they are not generally equal."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Dulong–Petit law states that at sufficiently high $T$ the molar heat capacity of a crystalline solid tends to…",
    "choices": [
      "$3R$",
      "$\\tfrac{3}{2}R$",
      "$R$",
      "$6R$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Classical equipartition over $3N$ quadratic modes."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For a reaction $\\nu_A A+\\nu_B B\\rightleftharpoons \\cdots$, the equilibrium constant in terms of molecular partition functions (ideal gases) depends on…",
    "choices": [
      "products of $q_i$ and standard-state factors",
      "only the energies of reactants at $T=0$",
      "volume but not temperature",
      "neither partition functions nor degeneracy"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$K(T)$ is built from $q$’s and standard-state powers; details omitted here."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "The Boltzmann distribution $p_i$ can be derived by maximizing…",
    "choices": [
      "the Gibbs entropy $S=-k\\sum_i p_i\\ln p_i$ with constraints on $\\sum p_i$ and $\\sum p_i E_i$",
      "the internal energy at fixed entropy",
      "the partition function directly",
      "the number of microstates without constraints"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Use Lagrange multipliers for normalization and average energy."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For an ideal quantum gas, which are correct? [Select all that apply]",
    "choices": [
      "FD: occupation $\\bar n=1/(e^{\\beta(\\epsilon-\\mu)}+1)$",
      "BE: occupation $\\bar n=1/(e^{\\beta(\\epsilon-\\mu)}-1)$",
      "At $T\\to\\infty$, both reduce to MB",
      "MB: occupation is exactly 0 or 1"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "MB gives $\\bar n\\ll 1$ with no exclusion."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Sommerfeld expansion for a degenerate Fermi gas implies at low $T$…",
    "choices": [
      "$C_V \\propto T$",
      "$C_V \\propto T^3$",
      "$C_V$ is constant",
      "$C_V$ vanishes exponentially"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Linear heat capacity is a hallmark of Fermi liquids at low $T$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For a classical ideal gas, the compressibility factor $Z$ equals…",
    "choices": [
      "1",
      "$1+ B_2 n + \\cdots$",
      "$p/kT$",
      "$NkT/pV$ which is $<1$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Ideal gas has $Z=1$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Clausius (Planck) form of the second law for a reversible process reads…",
    "choices": [
      "$\\mathrm d S = \\delta Q_\\mathrm{rev}/T$",
      "$\\mathrm d S = T\\,\\delta Q_\\mathrm{rev}$",
      "$\\mathrm d U = -T\\mathrm d S$",
      "$\\delta Q_\\mathrm{rev}=0$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "For reversible heat transfer at temperature $T$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Relation between $A$, $U$, and $S$ is…",
    "choices": [
      "$A=U-TS$",
      "$A=U+TS$",
      "$A=TS-U$",
      "$A=U$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Definition of Helmholtz free energy."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "The probability of a macrostate in the microcanonical ensemble is…",
    "choices": [
      "proportional to its number of microstates $\\Omega$",
      "proportional to $e^{-\\beta E}$",
      "always 1",
      "undefined"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "All accessible microstates at fixed $E$ are equally probable."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For an ideal diatomic gas at moderate temperatures (rotations active, vibrations frozen), $C_V$ is approximately…",
    "choices": [
      "$\\tfrac{5}{2}Nk$",
      "$\\tfrac{3}{2}Nk$",
      "$\\tfrac{7}{2}Nk$",
      "$2Nk$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "3 translational + 2 rotational = 5 quadratic DOF."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For a two-level system with degeneracies $g_0,g_1$, the ratio of populations is…",
    "choices": [
      "$\\dfrac{N_1}{N_0}=\\dfrac{g_1}{g_0} e^{-\\beta\\varepsilon}$",
      "$\\dfrac{N_1}{N_0}= e^{+\\beta\\varepsilon}$",
      "$\\dfrac{N_1}{N_0}=\\dfrac{g_0}{g_1} e^{-\\beta\\varepsilon}$",
      "$\\dfrac{N_1}{N_0}=1$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Degeneracy multiplies Boltzmann weights."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Rayleigh–Jeans vs Planck law: which is correct?",
    "choices": [
      "Planck’s distribution cures the ultraviolet divergence",
      "Rayleigh–Jeans holds at all frequencies",
      "Planck’s law reduces to Rayleigh–Jeans at low frequency",
      "Planck’s law uses Fermi–Dirac statistics"
    ],
    "correctIndices": [0,2],
    "points": 10,
    "explanation": "Planck uses BE statistics with $\\mu=0$; RJ is the low-$\\nu$ limit."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For a system in contact with a thermal and particle reservoir (grand canonical), the appropriate potential minimized on average is…",
    "choices": [
      "grand potential $\\Phi_G = -kT \\ln \\Xi$",
      "Helmholtz free energy $A$",
      "Gibbs free energy $G$",
      "internal energy $U$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$\\Phi_G=U-TS-\\mu N$; $\\Phi_G=-kT\\ln\\Xi$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "Which are correct about ideal-gas chemical potential? [Select all that apply]",
    "choices": [
      "$\\mu(T,p)=\\mu^\\circ(T)+kT\\ln(p/p^\\circ)$",
      "for mixtures, $\\mu_i=\\mu_i^\\circ+kT\\ln x_i$ (at fixed $T,p$ ideal solution)",
      "$\\mu$ is independent of composition",
      "$\\mu$ cannot be defined for gases"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "Standard-state expressions for ideal gases/solutions."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "The canonical entropy can also be written as…",
    "choices": [
      "$S = k\\,(\\ln Z + \\beta U)$",
      "$S = k\\,\\ln Z$ only",
      "$S = U/T$ exactly",
      "$S = -\\beta A$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "From $A=-kT\\ln Z$ and $U=-\\partial\\ln Z/\\partial\\beta$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "The probability of observing energy $E_i$ in the canonical ensemble is…",
    "choices": [
      "$p_i= e^{-\\beta E_i}/Z$",
      "$p_i=1/\\Omega$",
      "$p_i=\\delta(E_i-U)$",
      "$p_i$ independent of $E_i$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Boltzmann weights normalized by $Z$."
  },
  {
    "category": "Statistical Thermodynamics",
    "question": "For indistinguishable, noninteracting molecules the total partition function of the system factorizes as…",
    "choices": [
      "$Z_N=\\dfrac{1}{N!}\\,q_\\mathrm{trans}^N\\,q_\\mathrm{rot}^N\\,q_\\mathrm{vib}^N\\,q_\\mathrm{elec}^N$",
      "$Z_N=q_\\mathrm{trans}+q_\\mathrm{rot}+q_\\mathrm{vib}+q_\\mathrm{elec}$",
      "$Z_N= N!\\,q^N$",
      "$Z_N= q_\\mathrm{trans}^N$ only"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Product of independent mode partition functions with the $1/N!$ factor."
  },


// --- Intermolecular & Surface Forces (Israelachvili) — 50 ---


  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Classical DLVO theory includes which interactions?",
    "choices": [
      "Electrostatic double-layer repulsion",
      "van der Waals (dispersion) attraction",
      "Steric repulsion from adsorbed polymers",
      "Hydration forces"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "DLVO balances double-layer repulsion with vdW attraction; steric/hydration are non-DLVO."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "The Hamaker constant $A_H$ characterizes…",
    "choices": [
      "the strength of dispersion interactions between macroscopic bodies",
      "electrical conductivity of a film",
      "ionic strength of an electrolyte",
      "contact angle hysteresis"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$A_H$ sets vdW interaction magnitude in Lifshitz/Hamaker theory."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "For two identical flat plates across a medium (non-retarded), the vdW free energy per area $W(D)$ scales as…",
    "choices": [
      "$W(D) = -\\dfrac{A_H}{12\\pi D^2}$",
      "$W(D) = -\\dfrac{A_H}{6\\pi D^3}$",
      "$W(D) = +\\dfrac{A_H}{12\\pi D^2}$",
      "$W(D) = -A_H D$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Non-retarded plate–plate result: $W\\sim -A_H/(12\\pi D^2)$."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "vdW retardation at larger separations generally…",
    "choices": [
      "reduces the magnitude of attraction compared to non-retarded",
      "increases the magnitude of attraction",
      "has no effect",
      "changes attraction to repulsion for identical media in vacuum"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Finite light speed weakens coupling at long range (effective $D^{-3}$ for plates)."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Derjaguin approximation relates force and energy via…",
    "choices": [
      "$F(D)\\approx 2\\pi R\\,W(D)$ for sphere–plane at $R\\gg D$",
      "$F(D)\\approx W(D)/R$",
      "$F(D)\\approx 2R\\,W(D)^2$",
      "$F(D)$ is independent of $W(D)$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Valid for gently curved surfaces at small gaps."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Electrostatic double-layer (EDL) interaction between like-charged plates in a symmetric electrolyte decays (for moderate potentials) approximately as…",
    "choices": [
      "$\\propto e^{-\\kappa D}$",
      "$\\propto 1/D^2$",
      "$\\propto D$",
      "independent of separation"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Screening length $\\kappa^{-1}$ is the Debye length."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Linearized Poisson–Boltzmann (Debye–Hückel) is valid when surface potentials are roughly…",
    "choices": [
      "$\\lvert \\psi \\rvert \\lesssim 25\\,\\mathrm{mV}$ at room temperature",
      "$\\lvert \\psi \\rvert \\gtrsim 250\\,\\mathrm{mV}$",
      "any potential",
      "only for multivalent electrolytes"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Criterion $e\\lvert\\psi\\rvert \\ll kT$ (≈25.7 mV at 298 K)."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Zeta potential $\\zeta$ is…",
    "choices": [
      "the electrostatic potential at the hydrodynamic slipping plane",
      "the lattice potential at the crystal surface",
      "always equal to the surface potential",
      "the work function in vacuum"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$\\zeta$ is inferred from electrokinetic measurements (e.g., electrophoresis)."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "In the Gouy–Chapman–Stern model, the ‘Stern layer’ accounts for…",
    "choices": [
      "finite ion size and specific adsorption near the surface",
      "retarded vdW attraction",
      "quantum tunneling of ions",
      "capillary condensation"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "A compact layer precedes the diffuse PB layer."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Critical coagulation concentration (CCC) for oppositely screening electrolytes follows the Schulze–Hardy rule: increasing counterion valence…",
    "choices": [
      "strongly lowers CCC (roughly $\\propto z^{-6}$)",
      "has no effect",
      "increases CCC",
      "inverts the particle charge at any concentration"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Higher counterion valence screens more efficiently, collapsing the DLVO barrier."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Colloidal stability in DLVO arises when…",
    "choices": [
      "a repulsive EDL barrier exceeds thermal energy $\\sim kT$",
      "there is only vdW attraction",
      "the Hamaker constant is zero",
      "the Debye length is infinite"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Barrier height vs $kT$ controls aggregation kinetics."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Hydration/solvation forces between hydrophilic surfaces are typically…",
    "choices": [
      "short-ranged (Å scale) and often repulsive",
      "long-ranged (>100 nm) and always attractive",
      "independent of surface chemistry",
      "identical to steric forces"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Exponential decay length $\\sim$0.2–0.3 nm is common; sign can vary by system."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Steric stabilization by polymer layers arises from… [Select all that apply]",
    "choices": [
      "osmotic repulsion when brushes overlap",
      "elastic penalty to compress chains",
      "increased double-layer attraction",
      "bridging adhesion by the same polymer"
    ],
    "correctIndices": [0,1],
    "points": 10,
    "explanation": "Overlap raises local polymer concentration (osmotic) and compresses chains (elastic)."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Depletion attraction between big particles in a bath of nonadsorbing polymers is due to…",
    "choices": [
      "excluded-volume regions that create an unbalanced osmotic pressure",
      "covalent bonding of polymers",
      "electrostatic image charges",
      "increase of double-layer repulsion"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Asakura–Oosawa mechanism: overlap of depletion zones lowers free energy."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Oscillatory structural (solvation) forces in confined liquids arise from…",
    "choices": [
      "layering of molecules with a period ~ molecular diameter",
      "purely magnetic ordering",
      "capillary waves at free surfaces only",
      "classical radiation pressure"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Seen in SFA/AFM as damped oscillations of force with separation."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Hydrophobic attraction between extended hydrophobic surfaces in water can be…",
    "choices": [
      "longer-ranged than hydration (nm–10s of nm) under some conditions",
      "strictly zero at all separations",
      "always repulsive",
      "independent of dissolved gases/surface treatment"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Magnitude/range depend on surface prep, nanobubbles, dissolved gases, etc."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Disjoining pressure $\\Pi(D)$ and interfacial free energy $W(D)$ are related by…",
    "choices": [
      "$\\Pi(D) = -\\,\\mathrm d W/\\mathrm d D$",
      "$\\Pi(D) = W(D)/D$",
      "$\\Pi(D) = +\\,\\mathrm d W/\\mathrm d D$",
      "$\\Pi(D) = -D\\,W(D)$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "A thin film is (meta)stable when $\\Pi(D)$ balances capillary pressure, etc."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Capillary condensation in a slit occurs when…",
    "choices": [
      "a concave meniscus forms at $P/P_{sat}<1$ consistent with the Kelvin equation",
      "relative humidity must be 100%",
      "the Hamaker constant is negative",
      "the Debye length diverges"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Curved menisci stabilize liquid in confinement at undersaturation."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Young’s equation for contact angle on a smooth homogeneous surface is…",
    "choices": [
      "$\\gamma_{SV}=\\gamma_{SL}+\\gamma_{LV}\\cos\\theta$",
      "$\\gamma_{SL}=\\gamma_{SV}+\\gamma_{LV}\\cos\\theta$",
      "$\\gamma_{LV}=\\gamma_{SV}+\\gamma_{SL}\\cos\\theta$",
      "$\\cos\\theta=\\gamma_{SV}/\\gamma_{LV}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Balance of interfacial tensions at the contact line."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Contact angle hysteresis (advancing vs receding) can be caused by… [Select all that apply]",
    "choices": [
      "surface roughness or chemical heterogeneity",
      "pinning at defects/contaminants",
      "perfect atomic smoothness and purity",
      "adsorption/desorption dynamics"
    ],
    "correctIndices": [0,1,3],
    "points": 10,
    "explanation": "Pinning/heterogeneity and contamination lead to hysteresis."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Using Derjaguin with the non-retarded plate result, the sphere–plane vdW force is…",
    "choices": [
      "$F(D) = -\\dfrac{A_H R}{6 D^2}$",
      "$F(D) = -\\dfrac{A_H R}{12\\pi D}$",
      "$F(D) = -\\dfrac{A_H}{12\\pi D^2}$",
      "$F(D) = +\\dfrac{A_H R}{6 D^2}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Since $F\\approx 2\\pi R W(D)$ and $W= -A_H/(12\\pi D^2)$."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "In symmetric 1:1 electrolyte at low potentials, the potential in the diffuse layer decays as…",
    "choices": [
      "$\\psi(x)\\propto e^{-\\kappa x}$",
      "$\\psi(x)\\propto 1/x$",
      "$\\psi(x)$ constant",
      "$\\psi(x)\\propto x$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Linear PB solution yields simple exponential decay with Debye length $\\kappa^{-1}$."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Charge regulation between approaching surfaces means…",
    "choices": [
      "surface charge adapts with separation due to acid–base/adsorption equilibria",
      "charge remains strictly constant",
      "potential remains strictly constant",
      "vdW forces vanish"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Real surfaces are neither purely constant charge nor constant potential."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Helmholtz–Smoluchowski electro-osmotic slip velocity is…",
    "choices": [
      "$u_s = -\\dfrac{\\varepsilon\\,\\zeta}{\\eta}\\,E$",
      "$u_s = -\\dfrac{\\eta}{\\varepsilon\\,\\zeta}\\,E$",
      "$u_s = -\\varepsilon\\,\\eta\\,E$",
      "$u_s = -\\zeta\\,E$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Thin double-layer limit with no slip inside EDL."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Smoluchowski electrophoretic mobility for thin EDLs is approximately…",
    "choices": [
      "$\\mu_e = \\dfrac{\\varepsilon\\,\\zeta}{\\eta}$",
      "$\\mu_e = \\dfrac{\\eta}{\\varepsilon\\,\\zeta}$",
      "$\\mu_e = \\dfrac{\\zeta}{\\varepsilon}$",
      "$\\mu_e = \\dfrac{\\varepsilon}{\\zeta}$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Holds when particle size $\\gg \\kappa^{-1}$ and surface conduction is negligible."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Which system has the **longest** Debye length $\\kappa^{-1}$ (298 K, same ionic strength)?",
    "choices": [
      "Water ($\\varepsilon\\approx 80$) at 1 mM",
      "Water at 100 mM",
      "Acetonitrile ($\\varepsilon\\approx 37$) at 1 mM",
      "Ethanol ($\\varepsilon\\approx 25$) at 1 mM"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "$\\kappa^{-1}\\propto (\\varepsilon/I)^{1/2}$; low $I$ and high $\\varepsilon$ maximize range."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Increasing salt concentration in DLVO typically…",
    "choices": [
      "reduces $\\kappa^{-1}$ and lowers the EDL energy barrier",
      "increases $\\kappa^{-1}$ and raises the barrier",
      "does not affect EDL interactions",
      "changes vdW interactions directly through $A_H$ only"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Stronger screening shrinks range and can induce aggregation when the barrier vanishes."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Polymer-brush steric repulsion generally increases with… [Select all that apply]",
    "choices": [
      "grafting density",
      "polymer molecular weight",
      "good-solvent quality",
      "salt concentration (for neutral brushes)"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "Denser/longer brushes in good solvents swell and repel more; salt mainly affects polyelectrolyte brushes."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Hydrodynamic drainage force during approach (lubrication) between a sphere and a plane…",
    "choices": [
      "grows strongly as $D\\to 0$, complicating static force measurement",
      "is negligible at any speed",
      "is purely attractive regardless of motion",
      "is independent of viscosity"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Lubrication resistance $\\propto \\eta V / D$ (scaling) for sphere–plane approach."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "An approximate combining relation for Hamaker constants across medium 3 is…",
    "choices": [
      "$A_{132}\\approx\\big(\\sqrt{A_{11}}-\\sqrt{A_{33}}\\big)\\big(\\sqrt{A_{22}}-\\sqrt{A_{33}}\\big)$",
      "$A_{132}=A_{11}+A_{22}-A_{33}$",
      "$A_{132}=\\sqrt{A_{11}A_{22}A_{33}}$",
      "$A_{132}=0$ for any polar liquid"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "A useful Lifshitz-based approximation for dissimilar bodies across a medium."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "A **negative** $A_{132}$ implies that vdW interaction between 1 and 2 across medium 3 is…",
    "choices": [
      "repulsive",
      "attractive",
      "zero",
      "undefined"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Sign depends on dielectric spectra; repulsion enables stable thin films (e.g., wetting layers)."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Typical hydration-force decay length near hydrophilic surfaces is on the order of…",
    "choices": [
      "0.2–0.3 nm",
      "2–3 nm",
      "20–30 nm",
      "200–300 nm"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Very short-ranged compared to EDL forces."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Meniscus-mediated (capillary) interactions between particles at fluid interfaces (‘Cheerios effect’) are driven by…",
    "choices": [
      "interface deformations that overlap",
      "pure vdW across vacuum",
      "magnetic dipoles",
      "electrolyte screening"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Gravity/buoyancy or wetting asymmetry creates menisci; overlap yields lateral forces."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "For oxide surfaces, charging vs pH commonly shows that above the point of zero charge (PZC) the surface is…",
    "choices": [
      "negatively charged",
      "positively charged",
      "electrically neutral for all pH",
      "metallically conductive"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Deprotonation at $\\mathrm{pH}>\\mathrm{PZC}$ gives negative charge; protonation below PZC gives positive charge."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "DLVO interaction curves often exhibit a small-$D$ primary minimum and a larger-$D$ secondary minimum. The secondary minimum is…",
    "choices": [
      "a weak attraction at moderate separations due to screened vdW",
      "always stronger than the primary minimum",
      "present only at zero salt",
      "purely due to hydration"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Secondary minima can cause reversible flocculation."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Patch-charge attractions can occur when…",
    "choices": [
      "surfaces have heterogeneous charge regions even if the net charge has the same sign",
      "surfaces are perfectly homogeneous and identical",
      "no electrolyte is present",
      "vdW is repulsive"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Charge heterogeneity yields local attractions and adhesion beyond DLVO predictions."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Hydrodynamic slip at hydrophobic surfaces typically…",
    "choices": [
      "reduces viscous drag (apparent slip length $>0$)",
      "increases viscous drag",
      "is forbidden by the no-slip boundary condition",
      "eliminates EDL entirely"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Partial slip is often observed, impacting electro-osmosis and drainage."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Surface Force Apparatus (SFA) characteristically measures…",
    "choices": [
      "normal forces and separations with Å-level resolution via interferometry",
      "only lateral friction",
      "X-ray diffraction",
      "electronic band gaps"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "SFA uses crossed mica cylinders and optical fringes to resolve distance/force precisely."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "A thin liquid film is unstable to spinodal dewetting when…",
    "choices": [
      "$\\partial \\Pi/\\partial D < 0$ (destabilizing disjoining pressure)",
      "$\\partial \\Pi/\\partial D > 0$",
      "$\\Pi=0$ exactly",
      "Hamaker constant is positive"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Negative slope amplifies thickness fluctuations, leading to rupture."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Compared at equal ionic strength, a 2:1 electrolyte typically has a CCC that is…",
    "choices": [
      "much lower than a 1:1 electrolyte",
      "much higher than a 1:1 electrolyte",
      "identical to a 1:1 electrolyte",
      "undefined in DLVO"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Higher valence counterions collapse the barrier more efficiently (Schulze–Hardy)."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Linear PB ‘Grahame’ relation between surface charge and potential for 1:1 electrolyte reads…",
    "choices": [
      "$\\sigma = \\sqrt{8\\varepsilon kT n_0}\\;\\sinh\\!\\big(\\tfrac{e\\psi_0}{2kT}\\big)$",
      "$\\sigma = \\varepsilon\\,\\psi_0$",
      "$\\sigma = 2\\varepsilon kT n_0\\,\\psi_0$",
      "$\\sigma = 0$ for any electrolyte"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Exact PB (not linear DH) yields the hyperbolic sine relation for symmetric electrolytes."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Salt screens polyelectrolyte brushes by…",
    "choices": [
      "reducing electrostatic repulsions and shrinking the brush height",
      "increasing osmotic pressure inside the brush",
      "extending chains further into solution",
      "eliminating counterions from the brush"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Ionic strength suppresses intrabrush repulsion and counterion osmotic pressure."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Hydration repulsion between mica surfaces in electrolyte can…",
    "choices": [
      "overcome vdW attraction at very small separations",
      "be neglected at any separation",
      "always be attractive",
      "exist only in nonpolar solvents"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Measured by SFA as a steep, short-range repulsion preventing hard contact."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Short-range hydration forces can be attractive when…",
    "choices": [
      "specific ion–surface correlations favor bridging",
      "the medium is vacuum",
      "polymers are strongly adsorbed",
      "Hamaker constant is negative"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Ion-correlation or structured water can produce short-range attraction in special cases."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Typical magnitudes of Hamaker constants in condensed media are…",
    "choices": [
      "$\\sim 10^{-20}$–$10^{-19}\\,\\mathrm J$",
      "$\\sim 10^{-6}\\,\\mathrm J$",
      "$\\sim 1\\,\\mathrm J$",
      "$\\sim 10^{-30}\\,\\mathrm J$"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Order-of-magnitude values for common materials across liquids or vacuum."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Changing the intervening medium from vacuum to water usually…",
    "choices": [
      "reduces $A_H$ and thus weakens vdW attraction",
      "increases $A_H$ and strengthens vdW attraction",
      "has no effect on $A_H$",
      "reverses attraction to magnetic repulsion"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Dielectric response of the medium screens fluctuations, lowering $A_H$."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Which are **not** part of classical DLVO? [Select all that apply]",
    "choices": [
      "Steric (polymer) forces",
      "Hydration/solvation forces",
      "Hydrophobic interactions",
      "Electrostatic double-layer forces"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "DLVO = EDL + vdW only; others are non-DLVO forces."
  },

  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Debye screening length $\\kappa^{-1}$ increases with… [Select all that apply]",
    "choices": [
      "decreasing ionic strength",
      "increasing temperature",
      "increasing dielectric constant of the medium",
      "increasing counterion valence at fixed molarity"
    ],
    "correctIndices": [0,1,2],
    "points": 10,
    "explanation": "$\\kappa^{-1}\\propto (\\varepsilon kT/I)^{1/2}$ for symmetric electrolytes."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Electrostatic double-layer pressure between like-charged plates (1:1 electrolyte) typically…",
    "choices": [
      "increases as separation decreases and as ionic strength decreases",
      "decreases as separation decreases",
      "is independent of surface potential",
      "is zero at finite separation"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Weaker screening (low $I$) makes repulsion longer-ranged; pressure rises as plates approach."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Bridging flocculation by adsorbing polymers occurs when…",
    "choices": [
      "the same chain attaches to two surfaces",
      "polymers are strongly nonadsorbing",
      "electrolyte is absent",
      "Hamaker constant is negative"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Partial coverage can lead to adhesion via polymer bridges."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Charge inversion (‘overcharging’) of a surface can arise from…",
    "choices": [
      "adsorption of multivalent counterions or polyelectrolytes",
      "pure vdW forces",
      "hydrostatic pressure only",
      "absence of any ions"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Correlations/adsorption can reverse the sign of the effective charge/\\(\\zeta\\)."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Electro-osmosis and electrophoresis are both…",
    "choices": [
      "electrokinetic phenomena arising from EDL charge at interfaces",
      "forms of capillarity",
      "types of vdW interactions",
      "forms of magnetic resonance"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Fluid motion/particle motion under fields due to interfacial charges."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "For two identical plates at constant potential vs constant charge, realistic behavior is often…",
    "choices": [
      "between these limits due to charge regulation",
      "exactly constant potential",
      "exactly constant charge",
      "independent of boundary condition"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Surface groups equilibrate with solution; neither extreme strictly holds."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "vdW force between **different** materials across a third medium can be repulsive when…",
    "choices": [
      "the dielectric spectra satisfy $A_{132}<0$",
      "both materials are identical to the medium",
      "retardation is negligible",
      "ionic strength is very high"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "E.g., oil/water/solid combinations may yield repulsive Lifshitz vdW."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "In AFM/SFA force–distance curves, a ‘jump-to-contact’ upon approach usually indicates…",
    "choices": [
      "net attractive force gradient exceeding the cantilever/spring stiffness",
      "purely repulsive hydration forces",
      "instrument failure",
      "electro-osmosis"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Instability occurs when $\\mathrm dF/\\mathrm dD < -k_{spring}$."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Surface roughness generally…",
    "choices": [
      "reduces effective adhesion compared to ideal smooth surfaces",
      "increases adhesion in all cases",
      "has no effect on capillary forces",
      "eliminates EDL interactions"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Roughness lowers true contact area and can trap air/water, reducing adhesion (with exceptions)."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Hydration vs hydrophobic forces differ in that…",
    "choices": [
      "hydration is very short-ranged (Å) and often repulsive; hydrophobic can be longer-ranged and attractive",
      "both are identical phenomena",
      "hydration is always attractive",
      "hydrophobic is always repulsive"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Distinct origins and ranges/signs."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "In thin films on solids, the sign of $A_{132}$ (solid–film–vapor) helps determine…",
    "choices": [
      "whether a film tends to wet (repulsive vdW) or dewet (attractive vdW)",
      "electrophoretic mobility",
      "Debye length",
      "brush height of polymers"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Repulsive vdW (negative $A_{132}$) favors stable wetting layers (complete wetting)."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "For two plates, the **retarded** vdW free energy per area decays approximately as…",
    "choices": [
      "$\\propto -1/D^3$",
      "$\\propto -1/D^2$",
      "$\\propto -1/D$",
      "constant"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Retardation steepens the distance dependence for plates."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "Electrolyte asymmetry (e.g., 2:1) affects EDL by…",
    "choices": [
      "increasing screening (larger $\\kappa$) and enhancing ion correlations",
      "decreasing screening compared to 1:1 at same molarity",
      "eliminating PB description",
      "forcing constant potential boundary conditions"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Valence enters $\\kappa$ via ionic strength and influences correlations/CCC."
  },
  {
    "category": "Intermolecular & Surface Forces (Israelachvili)",
    "question": "At constant $T$ and $p$, wetting transitions to $\\theta\\to 0$ (‘complete wetting’) correspond to…",
    "choices": [
      "a stable macroscopic film of liquid on the solid",
      "a dry solid with $\\theta>90^\\circ$",
      "no capillary condensation",
      "negative surface tension"
    ],
    "correctIndices": [0],
    "points": 10,
    "explanation": "Complete wetting: $\\gamma_{SV}-\\gamma_{SL}\\ge \\gamma_{LV}$, $\\theta=0$."
  }

];
