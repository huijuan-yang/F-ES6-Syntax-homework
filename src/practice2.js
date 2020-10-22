const inject = (items, sections) => {
    sections.sort((a, b) => a.index - b.index);
    sections.map((eachSection, index) => {
        items.splice(eachSection.index + index, 0, eachSection.content)
    });

    return items;
}
export { inject };
