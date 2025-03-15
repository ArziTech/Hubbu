import {
  AddAnElement,
  DeleteAnElement,
  UpdateAnElement,
} from "@/components/providers/editor/action";
import {
  Action,
  Editor,
  EditorElement,
  EditorState,
  initialState,
  nullElement,
} from "@/components/providers/editor/index";

export const editorReducer = (
  state: EditorState = initialState,
  action: Action,
): EditorState => {
  switch (action.type) {
    case "ADD_ELEMENT": {
      const addedEditorElement: Editor = {
        ...state.editor,
        elements: AddAnElement(state.editor.elements, action),
      };

      const updatedHistory: Editor[] = Array.isArray(state.history)
        ? [
            ...state.history.slice(0, state.currentIndex + 1), // Gunakan spread operator untuk menggabungkan elemen
            { ...addedEditorElement }, // Tambahkan elemen baru
          ]
        : [{ ...addedEditorElement }]; // Jika history bukan array, buat array baru dengan elemen ini

      const newEditorState: EditorState = {
        ...state,
        editor: addedEditorElement,
        history: {
          ...state.history,
        },
        currentIndex: updatedHistory.length - 1,
      };
      return newEditorState;
    }
    case "UPDATE_ELEMENT": {
      const updatedElements = UpdateAnElement(state.editor.elements, action);

      console.log(`update: `);
      console.log(updatedElements);

      const updateElementIsSelected =
        state.editor.selectedElement.id === action.payload.elementDetails.id;

      const updatedEditor: Editor = {
        ...state.editor,
        elements: updatedElements,
        selectedElement: updateElementIsSelected
          ? action.payload.elementDetails
          : nullElement,
      };

      const updatedHistory: Editor[] = Array.isArray(state.history)
        ? [
            ...state.history.slice(0, state.currentIndex + 1), // Gunakan spread operator untuk menggabungkan elemen
            { ...updatedEditor }, // Tambahkan elemen baru
          ]
        : [{ ...updatedEditor }]; // Jika history bukan array, buat array baru dengan elemen ini

      const newEditorState: EditorState = {
        ...state,
        editor: updatedEditor,
        history: updatedHistory,
        currentIndex: updatedHistory.length - 1,
      };
      return newEditorState;
    }

    case "DELETE_ELEMENT": {
      const elementsAfterDelete: EditorElement[] = DeleteAnElement(
        state.editor.elements,
        action,
      );

      const editorAfterDelete: Editor = {
        ...state.editor,
        elements: elementsAfterDelete,
      };

      const updatedHistory: Editor[] = Array.isArray(state.history)
        ? [
            ...state.history.slice(0, state.currentIndex + 1), // Gunakan spread operator untuk menggabungkan elemen
            { ...editorAfterDelete }, // Tambahkan elemen baru
          ]
        : [{ ...editorAfterDelete }]; // Jika history bukan array, buat array baru dengan elemen ini

      const newEditorState: EditorState = {
        ...state,
        editor: editorAfterDelete,
        currentIndex: updatedHistory.length - 1,
        history: updatedHistory,
      };
      return newEditorState;
    }
    case "CHANGE_CLICKED_ELEMENT": {
      const clickedState: EditorState = {
        ...state,
        editor: {
          ...state.editor,
          selectedElement: action.payload.elementDetails,
        },
        history: {
          ...state.history,
        },
      };
      return clickedState;
    }
    case "CHANGE_DEVICE": {
      const changeDeviceState: EditorState = {
        ...state,
        editor: {
          ...state.editor,
          device: action.payload.device,
        },
      };
      return changeDeviceState;
    }
    case "TOGGLE_PREVIEW_MODE": {
      const togglePreviewModeState: EditorState = {
        ...state,
        editor: {
          ...state.editor,
          previewMode: action.payload
            ? action.payload.value
            : !state.editor.previewMode,
        },
      };
      return togglePreviewModeState;
    }
    case "REDO": {
      if (state.currentIndex < state.history.length - 1) {
        const nextIndex = state.currentIndex + 1;
        const nextState = state.history[nextIndex];
        const newEditorState: EditorState = {
          ...state,
          history: [...state.history, nextState],
          currentIndex: nextIndex,
        };
        return newEditorState;
      }
      return state;
    }
    case "UNDO": {
      if (state.currentIndex > 0) {
        const prevIndex = state.currentIndex - 1;
        const prevState = state.history[prevIndex];
        const newEditorState: EditorState = {
          ...state,
          editor: prevState,
          history: state.history,
          currentIndex: prevIndex,
        };
        return newEditorState;
      }
      return state;
    }
    case "LOAD_DATA": {
      const loadedEditorState: EditorState = {
        ...initialState,
        editor: {
          ...initialState.editor,
          elements: action.payload.elements || initialState.editor.elements,
        },
      };
      return loadedEditorState;
    }
    case "SET_WEBSITE_ID": {
      const { websiteId } = action.payload;
      const updatedWebsiteIdEditor: Editor = {
        ...state.editor,
        websiteId,
      };
      const updatedHistory: Editor[] = Array.isArray(state.history)
        ? [
            ...state.history.slice(0, state.currentIndex + 1), // Gunakan spread operator untuk menggabungkan elemen
            { ...updatedWebsiteIdEditor }, // Tambahkan elemen baru
          ]
        : [{ ...updatedWebsiteIdEditor }]; // Jika history bukan array, buat array baru dengan elemen ini

      const updatedWebsiteIdState: EditorState = {
        ...state,
        editor: updatedWebsiteIdEditor,
        history: updatedHistory,
        currentIndex: updatedHistory.length - 1,
      };
      return updatedWebsiteIdState;
    }
    default:
      return state;
  }
};
