import { fetchResources } from "/assets/js/apiService.js";



document.addEventListener("DOMContentLoaded",() => {
  const profilePicture = document.getElementById("profile_picture");
  const skillsContainer = document.getElementById("skillsContainer");
  const carouselContainer = document.getElementById("carouselContainer");
  const aboutmeContainer = document.getElementById("aboutme");
  const interestContainer = document.getElementById("interestContainer");
  const resumeContainer = document.getElementById("resumeContainer");
  const servicesContainer = document.getElementById("servicesContainer");
  

  const fetchAboutMe = async () => {
    try {
      const data = await fetchResources();
      console.log("Datos de aboutme:", data);

      if (data && data.length > 0) {
        const profileData = data.find(p => p.name === "aboutmeContainer");
        console.log("Datos del value de aboutmeContainer:", profileData.value);
        if (profileData && profileData.value) {
          aboutmeContainer.innerHTML = profileData.value;
        }
        else{
          console.error("No se encontro el valor del aboutmeContainer");
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

  const fetchInterestContainer = async () => {
    try {
      const data = await fetchResources();
      console.log("Datos de la API:", data);
      if (data && data.length > 0) {
        const profileData = data.find(p => p.name === "interestContainer");
        console.log("Datos del valñue de skills:", profileData.value);
        if (profileData && profileData.value) {
          interestContainer.innerHTML = profileData.value;
        }
        else{
          console.error("No se encontro el valor de los interestContainer");
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
        const profileData = data.find(p => p.name === "carouselContainer");
        console.log("Datos del value de carouselContainer:", profileData.value);
        if (profileData && profileData.value) {
          carouselContainer.innerHTML = profileData.value;
        }
        else{
          console.error("No se encontro el valor del carrusel");
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

  const fetchResumeContainer = async () => {
    try {
      const data = await fetchResources();
      console.log("Datos de la API:", data);

      if (data && data.length > 0) {
        const profileData = data.find(p => p.name === "resumeContainer");
        console.log("Datos del value de resumeContainer:", profileData.value);
        if (profileData && profileData.value) {
          resumeContainer.innerHTML = profileData.value;
        }
        else{
          console.error("No se encontro el valor del resumeContainer");
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

  const fetchServicesContainer = async () => {
    try {
      const data = await fetchResources();
      console.log("Datos de la API:", data);

      if (data && data.length > 0) {
        const profileData = data.find(p => p.name === "servicesContainer");
        console.log("Datos del value de servicesContainer:", profileData.value);
        if (profileData && profileData.value) {
          servicesContainer.innerHTML = profileData.value;
        }
        else{
          console.error("No se encontro el valor del servicesContainer");
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
  

  fetchAboutMe();
  fetchProfilePicture();
  fetchSpansSkills();
  fetchInterestContainer();
  fetchCarrousel();
  fetchResumeContainer();
  fetchServicesContainer();
});
