<template>
   <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="tittle">Title</label>
                <input type="text" name="tittle" id="tittle" ref="tittleInput" />
            </div>
            <div class="form-control">
                <label for="tittle">Description</label>
               <textarea id="description" name="description" rows="3" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">url</label>
                <input name="link" id="link" type="url" ref="linkInput"/> 
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
   </base-card>
</template>

<script>
    export default{
        name:"AddResource",
        inject:['addResource'],
        methods:{
            submitData(){
                const Tittle      = this.$refs.tittleInput.value;
                const Description = this.$refs.descInput.value;
                const  link       = this.$refs.linkInput.value;
                this.addResource(Tittle,Description,link);

            }
        }

    }
</script>

<style scoped>
    label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>