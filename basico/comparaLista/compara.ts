export function compararListas<T>(lista1: T[], lista2: T[]): T[] {
    return lista1.filter((item) => lista2.includes(item));
}