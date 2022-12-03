module.exports.parse = (raw, { yaml }) => {
    let rawObj = yaml.parse(raw)
    rawObj['proxy-groups'] = []
    rawObj['rules'] = []
    return yaml.stringify(rawObj)
}