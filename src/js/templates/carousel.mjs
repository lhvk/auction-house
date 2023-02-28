export function carouselTemplate(listingData) {
  return `
  <div
  id="thumbnailSlides"
  class="carousel slide container-fluid p-0 mb-4 gap-5 d-flex flex-column-reverse flex-lg-row"
>
  <!-- Carousel Indicators -->
  <div class="d-flex gap-4 flex-lg-column justify-content-center justify-content-md-start">
    <!-- Thumnail 0 -->
    <div
      class="thumb-container"
      role="button"
      data-bs-target="#thumbnailSlides"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    >
      <img
        src="${listingData.media[0]}"
        class="listing-card-image-thumb"
        alt="Thumbnail of the listing for sale"
      />
    </div>
    <!-- Thumnail 1 -->
    <div
      class="thumb-container"
      role="button"
      data-bs-target="#thumbnailSlides"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    >
      <img
        src="${listingData.media[1]}"
        class="listing-card-image-thumb"
        alt="Thumbnail of the listing for sale"
      />
    </div>
    <!-- Thumnail 2 -->
    <div
      class="thumb-container"
      role="button"
      data-bs-target="#thumbnailSlides"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    >
      <img
        src="${listingData.media[2]}"
        class="listing-card-image-thumb"
        alt="Thumbnail of the listing for sale"
      />
    </div>
  </div>
  <!-- Carousel Indicators End -->

  <!-- Carousel Inner -->
  <div class="carousel-inner">
    <!-- Carousel Item 0 -->
    <div class="carousel-item active">
      <img
        src="${listingData.media[0]}"
        onerror="this.onerror=null; 
  this.src='/src/assets/rubiks.png'"
        class="listing-card-image"
        alt="Image of the listing for sale"
      />
    </div>
    <!-- Carousel Item 1 -->
    <div class="carousel-item">
      <img
        src="${listingData.media[1]}"
        onerror="this.onerror=null; 
  this.src='/src/assets/rubiks.png'"
        class="listing-card-image"
        alt="Image of the listing for sale"
      />
    </div>
    <!-- Carousel Item 2 -->
    <div class="carousel-item">
      <img
        src="${listingData.media[2]}"
        onerror="this.onerror=null; 
    this.src='/src/assets/rubiks.png'"
        class="listing-card-image"
        alt="Image of the listing for sale"
      />
    </div>
  </div>
</div>
<!-- Carousel Inner End -->
<!-- CAROUSEL END -->
`;
}

export function renderCarouselTemplate(carousel, parent) {
  parent.insertAdjacentHTML("beforeend", carouselTemplate(carousel));
}
