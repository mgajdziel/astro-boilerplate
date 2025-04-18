import Swiper from 'swiper';
import { Controller } from 'swiper/modules';

const imageSwiper = new Swiper('.image-swiper', {
  modules: [Controller],
  loop: true,
});

const textSwiper = new Swiper('.text-swiper', {
  modules: [Controller],
  loop: true,
});

imageSwiper.controller.control = textSwiper;
textSwiper.controller.control = imageSwiper;