<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default {
  name: 'QuillEditor',
  props: {
    theme: { type: String, default: 'snow' },
    readOnly: { type: Boolean, default: false },
    placeholder: { type: String, default: '' }
  },
  setup(props) {
    const editor = ref(null);
    let quillInstance = null;

    onMounted(() => {
      quillInstance = new Quill(editor.value, {
        theme: props.theme,
        readOnly: props.readOnly,
        placeholder: props.placeholder
      });
    });

    onBeforeUnmount(() => {
      quillInstance = null;
    });

    return { editor };
  }
}
</script>

<template>
  <div ref="editor"></div>
</template>
