export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'

export function openPopup() {
    return { type: SHOW_MODAL }
}

export function closePopup() {
    return { type: HIDE_MODAL }
}