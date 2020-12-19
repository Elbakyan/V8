export const MENU_ACTIVE = 'MENU_ACTIVE'

export function MenuActive(id,type) {
    return (dispach) => {
        dispach({
            type: MENU_ACTIVE,
            payload: [type,id]
        })
    }
}