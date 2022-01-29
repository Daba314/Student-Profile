export const average = (array) => {
    const sumGrades =  array.reduce((a,b) => parseFloat(a)+ parseFloat(b))
    return sumGrades/array.length
}