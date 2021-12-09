export const convertTitleToID = (value)=>{
    return value.toLowerCase().replace(/\s+/g, '-')
}