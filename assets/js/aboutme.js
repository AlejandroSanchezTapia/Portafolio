import { fetchResources } from "/assets/js/apiService.js";



document.addEventListener("DOMContentLoaded",() => {
  const profilePicture = document.getElementById("profile_picture");
  const skillsContainer = document.getElementById("skillsContainer");

  const fetchProfilePicture = async () => {
    try {
      const data = await fetchResources();
      if (data && data.length > 0) {
        const profileData = data.find(p => p.name === "ProfilePicture");
        if (profileData && profileData.value) {
          profilePicture.src = profileData.value;
        }
        else{
          console.error("No se encontro el valor de la imagen en la respuesta");
        }
      }
      else{
        console.error("La respuesta de la API está vacía o no es válida.");
      }
    }
    catch (error) {
      console.error("Error al obtener los datos de la API:", error);
   }
  };

  const fetchSpansSkills = async () => {
    try {
      const data = await fetchResources();
      console.log("Datos de la API:", data);
      if (data && data.length > 0) {
        const profileData = data.find(p => p.name === "skillsContainer");
        console.log("Datos del valñue de skills:", profileData.value);
        if (profileData && profileData.value) {
          skillsContainer.innerHTML = profileData.value;
        }
        else{
          console.error("No se encontro el valor de los skills");
        }
      }
      else{
        console.error("La respuesta de la API está vacía o no es válida.");
      }
    }
    catch (error) {
      console.error("Error al obtener los datos de la API:", error);
   }
  };

  const fetchCarrousel = async () => {
    try {
      const data = await fetchResources();
      console.log("Datos de la API:", data);

      if (data && data.length > 0) {
        const profileData = data.find(p => p.name === "skillsContainer");
        console.log("Datos del valñue de skills:", profileData.value);
        if (profileData && profileData.value) {
          skillsContainer.innerHTML = profileData.value;
        }
        else{
          console.error("No se encontro el valor de los skills");
        }
      }
      else{
        console.error("La respuesta de la API está vacía o no es válida.");
      }
    }
    catch (error) {
      console.error("Error al obtener los datos de la API:", error);
   }
  };

  fetchProfilePicture();
  fetchSpansSkills();
});
