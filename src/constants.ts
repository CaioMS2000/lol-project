// export const baseUrl = process.env.URL
export const baseUrl = 'http://localhost:3000'
export const dataSetFolder = process.env.DATASET_NAME
export const dataSetVersion = dataSetFolder?.split('-')[1] ?? '.'
export const basePath = `src/${dataSetFolder}/`