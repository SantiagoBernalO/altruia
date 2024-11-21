import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.scss"]
})
export class HomeComponent implements OnInit {

  @ViewChild('videoPlayer', { static: true }) videoPlayer: ElementRef;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.currentVideoId}?enablejsapi=1`);
  }

  ngOnInit() {}

  showOptions = false;

  // URL del video de YouTube (usamos el enlace embebido)
  videoUrl: SafeResourceUrl;

  // Video ID de YouTube (ajustar según el video)
  currentVideoId: string = '-441V3hknDs';

  onVideoLoad() {
    // Puedes agregar lógica aquí para controlar el estado del video si es necesario.
  }

  onVideoEnded(event: any) {
    // Este evento puede ser manejado si necesitas saber cuándo el video termina.
    this.showOptions = true; // Mostrar opciones al terminar el video.
  }

  selectOption(option: number) {
    // Cambiar el video según la opción seleccionada
    if (option === 1) {
      this.playVideo('BRhvNR2q390'); // ID del video para la opción 1
    } else {
      this.playVideo('eGYoTCOBm28'); // ID del video para la opción 2
    }
    this.showOptions = false; // Ocultar las opciones
  }

  playVideo(videoId: string) {
    this.currentVideoId = videoId;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}?enablejsapi=1`);
  }
}
