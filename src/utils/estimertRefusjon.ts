import statens_grunnbeloep from './statens_grunnbeloep';

const estimertRefusjon = (månedsinntekt: number, ukedager: number): number => {
  const årslønn: number = Math.min(månedsinntekt * 12, statens_grunnbeloep * 6);

  const dagsats: number = Math.round(årslønn / 260);

  const vektetDagsats: number = Math.round(dagsats * 0.7);

  return vektetDagsats * ukedager;
};

export default estimertRefusjon;
