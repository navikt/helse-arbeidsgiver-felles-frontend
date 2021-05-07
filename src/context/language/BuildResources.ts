const buildResources = (lang: string, languages: Array<string>, languages2: Record<string, Record<string, string>>) => {
    const resources = {};
    languages.forEach(language => {
        let translation = {};
        Object.keys(languages2).forEach((key) => (
            translation[key] = languages2[key][language])
        );
        resources[language] = {
            translation: translation
        }
    })
    return resources;
}

export default buildResources
