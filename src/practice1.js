const parseData = (input) => {
    const {data, column} = input;
    const result = [];

    for (let each of data) {
        const eachData = {};
        column.map((eachColumn, index) => {
            eachData[eachColumn.name] = each[index]
        });
        result.push(eachData);
    }

    return result;
};
export { parseData };
