<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import  InputText  from "primevue/inputtext";
import  InputNumber  from "primevue/inputnumber";
import  Button  from "primevue/button";
import  FileUpload  from "primevue/fileupload";
import  Card  from "primevue/card";

const toast = useToast();

const form = ref({
  title: "",
  authors: "",
  year: null,
  lang: "uz",
  pages: null,
  pdf: null,
});

const loading = ref(false);

const handleUpload = (event) => {
  // PrimeVue FileUpload event
  form.value.pdf = event.files[0];
};

const submitForm = async () => {
  if (!form.value.title || !form.value.authors || !form.value.pdf) {
    toast.add({
      severity: "warn",
      summary: "Xato",
      detail: "Kitob nomi, mualliflar va PDF fayl majburiy!",
      life: 3000,
    });
    return;
  }

  try {
    loading.value = true;

    // 🔑 Test uchun statik token
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Yjk3YWQ3Mzc4NDZlNzM3Y2IzOWUzZSIsInJvbGVzIjpbIlNVUEVSQURNSU4iXSwiaWF0IjoxNzU2OTg4Nzc2LCJleHAiOjE3NTY5OTIzNzZ9.QGQd3fERXnWBS5Hhg7v8DKnHHKcN96boh_DpT7rv8Rw";

    const fd = new FormData();
    fd.append("title", form.value.title);
    fd.append("authors", form.value.authors);
    fd.append("year", form.value.year);
    fd.append("lang", form.value.lang);
    fd.append("pages", form.value.pages);
    fd.append("pdf", form.value.pdf);

    const res = await fetch("http://localhost:5000/api/v1/admin/books", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // ✅ statik token
      },
      body: fd,
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Xato yuz berdi");

    toast.add({
      severity: "success",
      summary: "Muvaffaqiyatli",
      detail: data.message,
      life: 3000,
    });

    // Formani tozalash
    form.value = {
      title: "",
      authors: "",
      year: null,
      lang: "uz",
      pages: null,
      pdf: null,
    };
  } catch (err) {
    toast.add({
      severity: "error",
      summary: "Xato",
      detail: err.message,
      life: 3000,
    });
  } finally {
    loading.value = false;
  }
};

</script>

<template>
  <Card class="max-w-xl mx-auto mt-10 shadow-lg">
    <template #title>📚 Yangi kitob qo‘shish</template>
    <template #content>
      <div class="space-y-4">
        <div>
          <label class="block mb-1 font-medium">Kitob nomi</label>
          <InputText v-model="form.title" class="w-full" placeholder="Kitob nomi" />
        </div>

        <div>
          <label class="block mb-1 font-medium">Muallif(lar)</label>
          <InputText v-model="form.authors" class="w-full" placeholder="Mualliflar (vergul bilan)" />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 font-medium">Yil</label>
            <InputNumber v-model="form.year" class="w-full" placeholder="2025" />
          </div>
          <div>
            <label class="block mb-1 font-medium">Sahifalar</label>
            <InputNumber v-model="form.pages" class="w-full" placeholder="250" />
          </div>
        </div>

        <div>
          <label class="block mb-1 font-medium">Til</label>
          <InputText v-model="form.lang" class="w-full" placeholder="uz/en/ru" />
        </div>

        <div>
          <label class="block mb-1 font-medium">PDF yuklash</label>
          <FileUpload
            mode="basic"
            name="pdf"
            accept="application/pdf"
            auto
            customUpload
            chooseLabel="Fayl tanlash"
            @select="handleUpload"
            class="w-full"
          />
        </div>

        <div class="pt-4 text-right">
          <Button
            label="Yuklash"
            icon="pi pi-upload"
            class="p-button-success"
            :loading="loading"
            @click="submitForm"
          />
        </div>
      </div>
    </template>
  </Card>
  <Toast />
</template>
