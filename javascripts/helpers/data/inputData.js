const input = [];

const setInput = (newInput) => {
    input.push(newInput);
}

const getInput = () => {
    return input;
}

export default { setInput, getInput };