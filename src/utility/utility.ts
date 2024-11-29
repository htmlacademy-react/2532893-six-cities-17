export const getCapitalizeWord = (value: string):string => value[0].toUpperCase() + value.split('').slice(1).join('').toLowerCase();
