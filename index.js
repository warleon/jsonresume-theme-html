import { css } from './assets/compact.js'
import Resume from './components/resume.js'

export const pdfRenderOptions = {
  mediaType: 'print',
  printBackground: true,
}

/**
 * @param {import('./schema.d.ts').ResumeSchema} resume
 * @returns {string}
 */
export const render = resume => {
  return Resume(resume, { css, js: '' })
}
