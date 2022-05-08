<template>
  <div class="form-control">
    <div>
      {{ label }}
      <div class="form-control__container">
        <label :for="_uid" class="form-control__fileInput-label">
          <img
            id="img"
            style="
              height: 276px;
              width: 329px;
              border-radius: 20px;
              background-color: #148a99;
            "
          />
          <input
            :id="_uid"
            type="file"
            :placeholder="placeholder"
            :disabled="disabled"
            class="form-control__fileInput"
            @change="setFile"
          />
        </label>
      </div>
    </div>
    <div v-if="errors && errors.length > 0" class="form-control__errors">
      {{ errors[0] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "fileInput",
  props: {
    value: [String, Number, InputEvent, File],
    disabled: Boolean,
    errors: Array,
    placeholder: String,
    label: String,
    type: String,
  },
  computed: {
    getFileUrl() {
      return this.value;
    },
  },
  methods: {
    setFile(file) {
      const { files } = file.target;
      if (files.length > 0) {
        this.imgUrl = files[0].path;
        this.$emit("change", files[0]);
        let fReader = new FileReader();
        fReader.readAsDataURL(files[0]);
        fReader.onloadend = (event) => {
          const img = document.getElementById("img");
          img.src = event.target.result;
        };
      }
    },
  },
};
</script>

<style scoped></style>
