export const layoutHookVueCode = `
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ELayoutTheme } from './enum'
import type { LayoutColor, LayoutTheme } from './type'

const useLayoutStore = defineStore('layout', () => {
  const shrinked = ref<boolean>(false)
  const isLayout = ref<boolean>(false)
  const showSide = ref<boolean>(false)
  const resizeContent = ref<boolean>(false)
  const theme = ref<LayoutTheme>(ELayoutTheme.LIGHT)
  const color = ref<LayoutColor>('blue')

  const switchTheme = (type: LayoutTheme) => (theme.value = type)
  const switchColor = (type: LayoutColor) => (color.value = type)
  const onLayout = () => (isLayout.value = true)
  const onShrinked = () => (shrinked.value = !shrinked.value)
  const onResizeContent = () => (resizeContent.value = true)
  const onShowSide = () => (showSide.value = true)
  const onHideSide = () => (showSide.value = false)

  return {
    shrinked,
    isLayout,
    showSide,
    resizeContent,
    theme,
    color,
    switchTheme,
    switchColor,
    onLayout,
    onShrinked,
    onResizeContent,
    onShowSide,
    onHideSide
  }
})

export default useLayoutStore
`

export const layoutHookReactCode = `
// LayoutStore
import { StateCreator, create } from "zustand";
import { LayoutTheme } from "./Context";


interface LayoutState {
  layoutTheme: LayoutTheme;
  shrinked: boolean;
  show: boolean;
  resizeContent: boolean;
  onShrinked: () => void;
  onResizeContent: () => void;
  onShowSide: () => void;
  onHideSide: () => void;
  onSwitchTheme: (theme: LayoutTheme) => void;
}

const store: StateCreator<LayoutState> = (set) => ({
  layoutTheme: "light",
  shrinked: false,
  show: false,
  resizeContent: false,
  onShrinked: () => set((state) => ({ ...state, shrinked: !state.shrinked })),
  onResizeContent: () => set((state) => ({ ...state, resizeContent: true })),
  onShowSide: () => set((state) => ({ ...state, show: true })),
  onHideSide: () => set((state) => ({ ...state, show: false })),
  onSwitchTheme: (theme: LayoutTheme) => set((state) => ({ ...state, layoutTheme: theme })),
});

const useLayoutStore = create(store);

export default useLayoutStore;

// useLayout hook
import useLayoutStore from "./LayoutStore";

const useLayout = () => {
  const [layoutTheme, shrinked, show, resizeContent] = useLayoutStore((state) => [
    state.layoutTheme,
    state.shrinked,
    state.show,
    state.resizeContent,
  ]);
  const [onShrinked, onResizeContent, onShowSide, onHideSide, onSwitchTheme] = useLayoutStore((state) => [
    state.onShrinked,
    state.onResizeContent,
    state.onShowSide,
    state.onHideSide,
    state.onSwitchTheme,
  ]);
  const layoutValue = { layoutTheme, shrinked, show, resizeContent };
  const layoutApi = { onShrinked, onResizeContent, onShowSide, onHideSide, onSwitchTheme };
  return { layoutValue, layoutApi };
};

export default useLayout;

`
