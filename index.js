function text_shadow(options) {
  let images = document.querySelectorAll(".textyBoy");

  if (options.shadow_type === "hard")
    options.shadow_type === "0px";

  else 
    options.shadow_type = "10px";

  if (options.padding == true)
    options.padding === "20px";

  else
    options.padding === '5px'

    images.forEach((image) => {
      image.styles.textShadow = `10px 10px ${options.shadow_type} rgba(0,0,0,.2)`;
      image.styles.padding = options.padding
    });
}

module.export.text_shadow = text_shadow