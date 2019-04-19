/*
export function someMutation (state) {
}
*/
export const updateTabsState = (state, view) => {
    
    if(state.tabs.some(v => v.path === view.path)) return
    state.tabs.push(view)

  }