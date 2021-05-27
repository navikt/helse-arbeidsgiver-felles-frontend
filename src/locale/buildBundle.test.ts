import LanguageBundle, { original } from "../config/LanguageBundle";
import { buildBundle } from "./buildBundle";

describe('buildBundle', () => {

  it('should build bundle', () => {
    expect(buildBundle(original)).toEqual(LanguageBundle);
  });

})
