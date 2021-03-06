$.fn.isAfter = function(sel) {
    return this.prevAll(sel).length !== 0;
}
$.fn.isBefore = function(sel) {
    return this.nextAll(sel).length !== 0;
}

$('.swiper-slide select').on('mousedown touchstart MSPointerDown', function(e) {
  //console.log('aker');
  e.stopPropagation();
});

var tagYT = document.createElement('script');

tagYT.src = "https://www.youtube.com/iframe_api";
var firstScriptTagYT = document.getElementsByTagName('script')[0];
firstScriptTagYT.parentNode.insertBefore(tagYT, firstScriptTagYT);

function onYouTubeIframeAPIReady() {
	funcionamientos.finitVideosYT();
}

function link_regular_behavior( e ){
 location.reload();
 window.open(e.attr('href'), '_blank');
}

$(document).on('click','.link_regular_behavior',function(e){
  e.preventDefault();
  link_regular_behavior($(this));
});

var funcionamientos = ( function( window, undefined ) {

	var isComparador = false;
	var sliders = [null]; //Variable que contendrá los sliders

	function initExpandForm(){
		$('.component-f1').find('form').addClass('collapse-form');

		$('.component-f1 .data-write').on('click', '>*',function(){
			$(this).parents('form').removeClass('collapse-form');
		});

	}

	//Esta función inyectará a las páginas con body.template-all-in ciertos elementos que no son necesario replicar en el armado de las plantillas como los menú y los footer
	function finitInyeccionPlantillas(){
		var template_header = '    <!-- M1 --> <!-- M1a --> <nav class="navbar-header-min"> <div class="container"> <div class="row"> <div class="col-md-2 main-logo"> <span class="logo"> <a href="#" title="Universidad Del Valle De México">Universidad Del Valle De México</a> </span> </div><div class="col-md-10 superior-bar"> <div class="container"> <div class="col-sm-12 col-md-8 aditional-topics"> <ul> <li> <a class="special" href="#">Aspirantes</a> </li><li> <a class="active" href="#">Alumnos</a> </li><li> <a href="#">Egresados</a> </li><li> <a href="#">Padres de Familia</a> </li><li> <a href="#">Staff</a> </li><li> <a href="#">Empresas</a> </li></ul> </div><div class="col-sm-12 col-md-4 less-imp-topics"> <ul> <li> <a href="#"> <span class="icon i-chat"></span> </a> </li><li class="search"> <a href="#"> <span class="icon i-search"></span> </a> <div class="data-write"> <form> <input type="text" placeholder="Buscar en UVM"> <button type="submit">Buscar</button> </form> </div></li></ul> </div></div></div><div class="col-md-12 mobile-head"> <div class="container"> <div class="col-xs-2"> <a href="#" class="glyphicon glyphicon-menu-hamburger menu-mobile-button"></a> </div><div class="col-xs-6 logo-container"> <span class="logo"> <a href="#" title="Universidad Del Valle De México">Universidad Del Valle De México</a> </span> </div><div class="col-xs-2"> <a href="#" class="icon i-search"></a> </div><div class="col-xs-2"> <a href="#" class="icon i-quicklink menu-mobile-ql"></a> </div><div class="mobile-search-container col-sm-12 col-xs-12"> <div class="data-write"> <form> <input type="text" placeholder="Buscar en UVM"> <button type="submit">Buscar</button> </form> </div></div></div></div></div></div></nav> <nav class="nav-section nav-oscuro"> <div class="container"> <ul class="clearfix"> <li class="col-xs-12 cancel-zone"> <span class="wide-b" id="menu-close-container"><span class="glyphicon glyphicon-remove like-anchor menu-mobile-button"></span></span> <span class="wide-a back like-anchor t-center menu-change-soy" id="menu-back-container"><span class="glyphicon glyphicon-chevron-left"></span><span>Volver al Menú</span></span> </li><li class="col-xs-12 col-md-2 menu-change-soy not-on-menu-soy not-desktop-menu" id="menu-change-soy"> <a class="anchor-a">Soy aspirante</a> </li><li class="not-on-menu-soy not-desktop-menu"> <a href="" class="anchor-b">Test Vocacional<span class="glyphicon glyphicon-menu-right"></span></a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-acerca-de-uvm"> <a href="#" class="elements" aria-controls="acerca">Acerca de UVM</a> <div class="submenu clearfix"> <div class="col-md-3 col-xs-12 big-news"> <div class="in-content"> <div class="col-xs-12"> <img width="100%" height="100%" src="https://i.blogs.es/04108f/itn_on_all_devices.jpg_resized_460_/1366_2000.jpeg"> </div><p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> </div></div><div class="col-md-9 col-xs-12 opc-1" > <div class="col-md-4 col-xs-12"> <div class="divider-mobile visible-xs"></div><ul class="tab-elements visible-lg visible-md" role="tablist" id="acerca"> <li role="presentation" class="item"> <a href="#home" aria-controls="" class="parent" role="tab" data-toggle="tab">Cuadro de honor alumnos</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Modelo educativo</a> </li><li role="presentation" class="item"> <a href="#messages" aria-controls="" class="parent" role="tab" data-toggle="tab">Nosotros</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Quienes somos</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="home" class="parent" role="tab" data-toggle="tab">Rectoría Institucional</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="profile" class="parent" role="tab" data-toggle="tab">Somos internacionales</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Somos reconocidos</a> </li></ul> </div></div></div></li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-programas-academicos"> <a href="#" class="elements" aria-controls="programas">Programas Académicos</a> <div class="submenu clearfix"> <div class="col-md-3 big-news"> <div class="in-content"> <p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> <p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> </div></div><div class="col-md-9 opc-2"> <div class="col-md-4 col-xs-12"> <div class="divider-mobile visible-xs"></div><ul class="tab-elements visible-lg visible-md" role="tablist" id="programas"> <li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Educación Continua</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_1" class="parent" role="tab" data-toggle="tab">Instituto Profesional</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2" class="parent" role="tab" data-toggle="tab">Licenciaturas e Ingenierias</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3" class="parent" role="tab" data-toggle="tab">Licenciaturas Ejecutivas</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Oferta educativa</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4" class="parent" role="tab" data-toggle="tab">Posgrados</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_5" class="parent" role="tab" data-toggle="tab">Prepa UVM</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_6" class="parent" role="tab" data-toggle="tab">Programas en Línea</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li></ul> </div><div class="col-md-4 col-xs-12"> <div class="tab-content"> <div role="tabpanel" class="tab-pane" id="2_1"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">TSU-mantenimiento-area-industrial-automotriz </a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" class="item" data-toggle="tab">TSU-Perforación-y-servicios-de-producción</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">TSU-Procesos-área-automotiz</a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_2_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_2" class="children" role="tab" data-toggle="tab">Hospitalidad</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_3" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_4" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_5" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_6" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_3"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_3_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_2" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_3" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_4" class="children" role="tab" data-toggle="tab">Revalidaciones</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_5" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_6" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_4"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_4_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_2" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_3" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_4" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_5" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_5"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_5_1" class="children" role="tab" data-toggle="tab">2 años</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_5_2" class="children" role="tab" data-toggle="tab">3 años</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_6"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_6_1" class="children" role="tab" data-toggle="tab">Licenciaturas Ejecutivas en Línea</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_6_2" class="children" role="tab" data-toggle="tab">Posgrados en Línea</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div></div></div><div class="col-md-4 col-xs-12"> <div class="tab-content"> <div role="tabpanel" class="tab-pane" id="2_2_1"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ciencias de la comunicación</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" class="item" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño de la moda e industria del vestido </div></a> </li> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño gráfico</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div> Diseño industrial</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño multimedia y arte digital</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_2"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Internacional en gastronomía</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_3"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Arquitectura</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Desarrollo de tecnologías de información</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería biomédica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería cívil</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingenieria en energa y desarrollo sustentable</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en mecánica eléctrica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en mecatrónica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en negocios y tecnologías de la manufactura</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en petróleo y gas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en sistemas computacionales</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en tecnología interactiva en animación digital</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en telecomunicaciones y electrónica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería industrial y de sistemas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería mecánica industrial</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_4"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de empresas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de empresas turísticas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de negocios internacionales</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Comercio internacional</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Contaduría pública y finanzas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Economía</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Mercadotecnía</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Mercadotecnía deportiva internacional</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Negocios financieros y bancarios</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Negocios gastronómicos</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Relaciones internacionales</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_5"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Cirujano dentísta</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Enfermería</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>fisioterapia</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Medicina</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Medicina veterinaria y zootecnia</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Nutrición</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Psicología</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Químico farmacéutico biotecnólogo</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_6"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Derecho</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"><span><strong>• </strong></span> Pedagogía</a> </li></ul> </div></div></div></div></div></li><li class="col-xs-12 col-md-2 not-on-menu-soy m-academia"> <a href="#">Academia</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-por-que-uvm"> <a href="#">¿Por qué UVM?</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-campus"> <a href="#">Campus</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-financiamiento-y-becas"> <a href="#">Financiamiento y Becas</a> </li></ul> <ul class="clearfix topicss" id="menu-soy"> <li class="col-xs-12" data-soy="publico-en-general"> <a href="#">Soy Público en General</a> </li><li class="col-xs-12 col-md-2" data-soy="aspirante"> <a href="#">Soy Aspirante</a> </li><li class="col-xs-12 col-md-2" data-soy="alumno"> <a href="#">Soy Alumno</a> </li><li class="col-xs-12 col-md-2" data-soy="egresado"> <a href="#">Soy Egresado</a> </li><li class="col-xs-12 col-md-2" data-soy="staff"> <a href="#">Soy Staff</a> </li><li class="col-xs-12 col-md-2" data-soy="padre-de-familia"> <a href="#">Soy Padre de Familia</a> </li><li class="col-xs-12 col-md-2" data-soy="organizacion"> <a href="#">Soy Organización</a> </li></ul> <div class="container change-lenguage not-on-menu-soy"> <div class="col-xs-6 l-espanol"> <a href="#">Español</a> </div><div class="col-xs-6 l-english"> <a href="#">English</a> <span class="circle-form"> <span class="icon i-world-uvm"></span> </span> </div></div></div></nav> <nav class="component-ql"> <div class="button-container"><span class="glyphicon glyphicon-remove menu-mobile-ql"></span></div><button id="open-ql-btn"><span class="icon i-arrow-left"></span></button> <ul> <li> <a href="#" class="topic-links"> <span class="icon i-compass"></span> <p>Conoce tus habilidades</p></a> </li><li> <a href="#" class="topic-links"> <span class="icon i-dates"></span> <p>Visita tu campus</p></a> </li><li> <a href="#" class="topic-links"> <span class="icon i-calc"></span> <p>Calcula tu colegiatura</p></a> </li><li> <a href="#" class="topic-links"> <span class="icon i-signlist"></span> <p>Inicia tu inscripción</p></a> </li></ul></nav> <div class="container"> <section class="block-uvm"> <div class="component-wrapper"> <div class="row component-br"> <p><a href=""><span class="glyphicon glyphicon-home"></span></a></p><p><a href="">Experiencia estudiantil</a></p><p><a href="">Noticias</a></p></div></div></section></div> <!-- FIN BR --> <!-- FIN M1 -->';
    //var template_header = '    <!-- M1 --> <!-- M1a --> <nav class="navbar-header-min"> <div class="container"> <div class="row"> <div class="col-md-2 main-logo"> <span class="logo"> <a href="#" title="Universidad Del Valle De México">Universidad Del Valle De México</a> </span> </div><div class="col-md-10 superior-bar"> <div class="container"> <div class="col-sm-12 col-md-8 aditional-topics"> <ul> <li> <a class="special" href="#">Aspirantes</a> </li><li> <a class="active" href="#">Alumnos</a> </li><li> <a href="#">Egresados</a> </li><li> <a href="#">Padres de Familia</a> </li><li> <a href="#">Staff</a> </li><li> <a href="#">Empresas</a> </li></ul> </div><div class="col-sm-12 col-md-4 less-imp-topics"> <ul> <li> <a href="#"> <span class="icon i-chat"></span> </a> </li><li> <a href="#"> <span class="icon i-telephone"></span> </a> </li><li> <a href="#"> <span class="icon i-mail"></span> </a> </li><li class="language"> <a href="#" class="option-1"> <span class="icon i-world-uvm"></span> <span class="current">Español</span> <span class="icon i-angle-down"></span> </a> <div class="data-languages"> <div> <span class="icon i-world-uvm"></span> <span class="type">Idioma</span> <span class="icon i-angle-down"></span> </div><a href="#" class="option-1"> <span class="type">Español</span> </a> <a href="#"> <span class="type">Inglés</span> </a> </div></li><li class="search"> <a href="#"> <span class="icon i-search"></span> </a> <div class="data-write"> <form> <input type="text" placeholder="Buscar en UVM"> <button type="submit">Buscar</button> </form> </div></li></ul> </div></div></div><div class="col-md-12 mobile-head"> <div class="container"> <div class="col-xs-2"> <a href="#" class="glyphicon glyphicon-menu-hamburger menu-mobile-button"></a> </div><div class="col-xs-6 logo-container"> <span class="logo"> <a href="#" title="Universidad Del Valle De México">Universidad Del Valle De México</a> </span> </div><div class="col-xs-2"> <a href="#" class="icon i-search"></a> </div><div class="col-xs-2"> <a href="#" class="icon i-quicklink menu-mobile-ql"></a> </div><div class="mobile-search-container col-sm-12 col-xs-12"> <div class="data-write"> <form> <input type="text" placeholder="Buscar en UVM"> <button type="submit">Buscar</button> </form> </div></div></div></div></div></div></nav> <nav class="nav-section"> <div class="container"> <ul class="clearfix"> <li class="col-xs-12 cancel-zone"> <span class="wide-b" id="menu-close-container"><span class="glyphicon glyphicon-remove like-anchor menu-mobile-button"></span></span> <span class="wide-a back like-anchor t-center menu-change-soy" id="menu-back-container"><span class="glyphicon glyphicon-chevron-left"></span><span>Volver al Menú</span></span> </li><li class="col-xs-12 col-md-2 menu-change-soy not-on-menu-soy not-desktop-menu" id="menu-change-soy"> <a class="anchor-a">Soy aspirante</a> </li><li class="not-on-menu-soy not-desktop-menu"> <a href="" class="anchor-b">Test Vocacional<span class="glyphicon glyphicon-menu-right"></span></a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-acerca-de-uvm"> <a href="#" class="elements" aria-controls="acerca">Acerca de UVM</a> <div class="submenu clearfix"> <div class="col-md-3 col-xs-12 big-news"> <div class="in-content"> <div class="col-xs-12"> <img width="100%" height="100%" src="https://i.blogs.es/04108f/itn_on_all_devices.jpg_resized_460_/1366_2000.jpeg"> </div><p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> </div></div><div class="col-md-9 col-xs-12 opc-1" > <div class="col-md-4 col-xs-12"> <div class="divider-mobile visible-xs"></div><ul class="tab-elements visible-lg visible-md" role="tablist" id="acerca"> <li role="presentation" class="item"> <a href="#home" aria-controls="" class="parent" role="tab" data-toggle="tab">Cuadro de honor alumnos</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Modelo educativo</a> </li><li role="presentation" class="item"> <a href="#messages" aria-controls="" class="parent" role="tab" data-toggle="tab">Nosotros</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Quienes somos</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="home" class="parent" role="tab" data-toggle="tab">Rectoría Institucional</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="profile" class="parent" role="tab" data-toggle="tab">Somos internacionales</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Somos reconocidos</a> </li></ul> </div></div></div></li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-programas-academicos"> <a href="#" class="elements" aria-controls="programas">Programas Académicos</a> <div class="submenu clearfix"> <div class="col-md-3 big-news"> <div class="in-content"> <p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> <p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> </div></div><div class="col-md-9 opc-2"> <div class="col-md-4 col-xs-12"> <div class="divider-mobile visible-xs"></div><ul class="tab-elements visible-lg visible-md" role="tablist" id="programas"> <li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Educación Continua</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_1" class="parent" role="tab" data-toggle="tab">Instituto Profesional</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2" class="parent" role="tab" data-toggle="tab">Licenciaturas e Ingenierias</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3" class="parent" role="tab" data-toggle="tab">Licenciaturas Ejecutivas</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Oferta educativa</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4" class="parent" role="tab" data-toggle="tab">Posgrados</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_5" class="parent" role="tab" data-toggle="tab">Prepa UVM</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_6" class="parent" role="tab" data-toggle="tab">Programas en Línea</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li></ul> </div><div class="col-md-4 col-xs-12"> <div class="tab-content"> <div role="tabpanel" class="tab-pane" id="2_1"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">TSU-mantenimiento-area-industrial-automotriz </a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" class="item" data-toggle="tab">TSU-Perforación-y-servicios-de-producción</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">TSU-Procesos-área-automotiz</a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_2_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_2" class="children" role="tab" data-toggle="tab">Hospitalidad</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_3" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_4" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_5" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_6" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_3"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_3_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_2" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_3" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_4" class="children" role="tab" data-toggle="tab">Revalidaciones</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_5" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_6" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_4"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_4_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_2" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_3" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_4" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_5" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_5"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_5_1" class="children" role="tab" data-toggle="tab">2 años</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_5_2" class="children" role="tab" data-toggle="tab">3 años</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_6"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_6_1" class="children" role="tab" data-toggle="tab">Licenciaturas Ejecutivas en Línea</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_6_2" class="children" role="tab" data-toggle="tab">Posgrados en Línea</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div></div></div><div class="col-md-4 col-xs-12"> <div class="tab-content"> <div role="tabpanel" class="tab-pane" id="2_2_1"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ciencias de la comunicación</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" class="item" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño de la moda e industria del vestido </div></a> </li> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño gráfico</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div> Diseño industrial</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño multimedia y arte digital</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_2"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Internacional en gastronomía</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_3"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Arquitectura</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Desarrollo de tecnologías de información</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería biomédica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería cívil</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingenieria en energa y desarrollo sustentable</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en mecánica eléctrica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en mecatrónica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en negocios y tecnologías de la manufactura</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en petróleo y gas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en sistemas computacionales</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en tecnología interactiva en animación digital</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en telecomunicaciones y electrónica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería industrial y de sistemas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería mecánica industrial</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_4"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de empresas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de empresas turísticas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de negocios internacionales</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Comercio internacional</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Contaduría pública y finanzas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Economía</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Mercadotecnía</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Mercadotecnía deportiva internacional</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Negocios financieros y bancarios</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Negocios gastronómicos</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Relaciones internacionales</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_5"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Cirujano dentísta</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Enfermería</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>fisioterapia</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Medicina</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Medicina veterinaria y zootecnia</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Nutrición</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Psicología</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Químico farmacéutico biotecnólogo</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_6"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Derecho</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"><span><strong>• </strong></span> Pedagogía</a> </li></ul> </div></div></div></div></div></li><li class="col-xs-12 col-md-2 not-on-menu-soy m-academia"> <a href="#">Academia</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-por-que-uvm"> <a href="#">¿Por qué UVM?</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-campus"> <a href="#">Campus</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-financiamiento-y-becas"> <a href="#">Financiamiento y Becas</a> </li></ul> <ul class="clearfix topicss" id="menu-soy"> <li class="col-xs-12" data-soy="publico-en-general"> <a href="#">Soy Público en General</a> </li><li class="col-xs-12 col-md-2" data-soy="aspirante"> <a href="#">Soy Aspirante</a> </li><li class="col-xs-12 col-md-2" data-soy="alumno"> <a href="#">Soy Alumno</a> </li><li class="col-xs-12 col-md-2" data-soy="egresado"> <a href="#">Soy Egresado</a> </li><li class="col-xs-12 col-md-2" data-soy="staff"> <a href="#">Soy Staff</a> </li><li class="col-xs-12 col-md-2" data-soy="padre-de-familia"> <a href="#">Soy Padre de Familia</a> </li><li class="col-xs-12 col-md-2" data-soy="organizacion"> <a href="#">Soy Organización</a> </li></ul> <div class="container change-lenguage not-on-menu-soy"> <div class="col-xs-6 l-espanol"> <a href="#">Español</a> </div><div class="col-xs-6 l-english"> <a href="#">English</a> <span class="circle-form"> <span class="icon i-world-uvm"></span> </span> </div></div></div></nav> <nav class="component-ql"> <div class="button-container"><span class="glyphicon glyphicon-remove menu-mobile-ql"></span></div><button id="open-ql-btn"><span class="icon i-arrow-left"></span></button> <ul> <li> <a href="#" class="topic-links"> <span class="icon i-compass"></span> <p>Conoce tus habilidades</p></a> </li><li> <a href="#" class="topic-links"> <span class="icon i-dates"></span> <p>Visita tu campus</p></a> </li><li> <a href="#" class="topic-links"> <span class="icon i-calc"></span> <p>Calcula tu colegiatura</p></a> </li><li> <a href="#" class="topic-links"> <span class="icon i-signlist"></span> <p>Inicia tu inscripción</p></a> </li></ul></nav> <div class="container"> <section class="block-uvm"> <div class="component-wrapper"> <div class="row component-br"> <p><a href=""><span class="glyphicon glyphicon-home"></span></a></p><p><a href="">Experiencia estudiantil</a></p><p><a href="">Noticias</a></p></div></div></section></div> <!-- FIN BR --> <!-- FIN M1 -->';
    //var template_header_home = '  <!-- M1 HOME--> <div class="container"> <div class="row header-home"> <div class="col-sm-12"> <div class="component-slider-full col-sm-12 cont-slider-home"> <div class="swiper-container"> <div class="swiper-wrapper"> <div class="swiper-slide" data-img="../../assets/img/back-home.jpg" data-titulo="Título 1" data-subtitulo="Subtitulo 1"></div><div class="swiper-slide" data-img="https://placeholdit.imgix.net/~text?txtsize=33&txt=imagen&w=1280&h=681" data-titulo="Título 2" data-subtitulo="Subtitulo 2"></div></div><div class="swiper-button-next swiper-button-white"></div><div class="swiper-button-prev swiper-button-white"></div></div></div><div class="col-sm-12 cont-nav-home"> <nav class="navbar-header-min"> <div class="container"> <div class="row"> <div class="col-md-12 superior-bar"> <div class="container"> <div class="col-sm-12 col-md-8 aditional-topics"> <ul> <li> <a class="special" href="#">Aspirantes</a> </li><li> <a href="#">Alumnos</a> </li><li> <a href="#">Egresados</a> </li><li> <a href="#">Académicos</a> </li><li> <a href="#">Administrativos</a> </li><li> <a href="#">Empresas</a> </li></ul> </div><div class="col-sm-12 col-md-4 less-imp-topics"> <ul> <li> <a href="#"> <span class="icon i-chat"></span> </a> </li><li class="search"> <a href="#"> <span class="icon i-search"></span> </a> <div class="data-write"> <form> <input type="text" placeholder="Buscar en UVM"> <button type="submit">Buscar</button> </form> </div></li></ul> </div></div></div><div class="col-md-12 mobile-head"> <div class="container"> <div class="col-xs-2"> <a href="#" class="glyphicon glyphicon-menu-hamburger menu-mobile-button"></a> </div><div class="col-xs-8 logo-container"> <span class="logo"> <a href="#" title="Universidad Del Valle De México">Universidad Del Valle De México</a> </span> </div><div class="col-xs-2"> <a href="#" class="icon i-search"></a> </div><div class="mobile-search-container col-sm-12 col-xs-12"> <div class="data-write"> <form> <input type="text" placeholder="Buscar en UVM"> <button type="submit">Buscar</button> </form> </div></div></div></div><div class="col-sm-4 main-logo col-sm-offset-4"> <h1 class="logo"> <a href="#" title="Universidad Del Valle De México">Universidad Del Valle De México</a> </h1> </div></div></div></nav> <nav class="nav-section nav-claro"> <div class="container"> <ul class="clearfix"> <li class="col-xs-12 cancel-zone"> <span class="wide-b" id="menu-close-container"><span class="glyphicon glyphicon-remove like-anchor menu-mobile-button"></span></span> <span class="wide-a back like-anchor t-center menu-change-soy" id="menu-back-container"><span class="glyphicon glyphicon-chevron-left"></span><span>Volver al Menú</span></span> </li><li class="col-xs-12 col-md-2 menu-change-soy not-on-menu-soy not-desktop-menu" id="menu-change-soy"> <a class="anchor-a">Soy aspirante</a> </li><li class="not-on-menu-soy not-desktop-menu"> <a href="" class="anchor-b">Test Vocacional<span class="glyphicon glyphicon-menu-right"></span></a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-acerca-de-uvm"> <a href="#" class="elements" aria-controls="acerca">Acerca de UVM</a> <div class="submenu clearfix"> <div class="col-md-3 col-xs-12 big-news"> <div class="in-content"> <div class="col-xs-12"> <img width="100%" height="100%" src="https://i.blogs.es/04108f/itn_on_all_devices.jpg_resized_460_/1366_2000.jpeg"> </div><p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> </div></div><div class="col-md-9 col-xs-12 opc-1" > <div class="col-md-4 col-xs-12"> <div class="divider-mobile visible-xs"></div><ul class="tab-elements visible-lg visible-md" role="tablist" id="acerca"> <li role="presentation" class="item"> <a href="#home" aria-controls="" class="parent" role="tab" data-toggle="tab">Cuadro de honor alumnos</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Modelo educativo</a> </li><li role="presentation" class="item"> <a href="#messages" aria-controls="" class="parent" role="tab" data-toggle="tab">Nosotros</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Quienes somos</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="home" class="parent" role="tab" data-toggle="tab">Rectoría Institucional</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="profile" class="parent" role="tab" data-toggle="tab">Somos internacionales</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Somos reconocidos</a> </li></ul> </div></div></div></li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-programas-academicos"> <a href="#" class="elements" aria-controls="programas">Programas Académicos</a> <div class="submenu clearfix"> <div class="col-md-3 big-news"> <div class="in-content"> <p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> <p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> </div></div><div class="col-md-9 opc-2"> <div class="col-md-4 col-xs-12"> <div class="divider-mobile visible-xs"></div><ul class="tab-elements visible-lg visible-md" role="tablist" id="programas"> <li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Educación Continua</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_1" class="parent" role="tab" data-toggle="tab">Instituto Profesional</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2" class="parent" role="tab" data-toggle="tab">Licenciaturas e Ingenierias</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3" class="parent" role="tab" data-toggle="tab">Licenciaturas Ejecutivas</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Oferta educativa</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4" class="parent" role="tab" data-toggle="tab">Posgrados</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_5" class="parent" role="tab" data-toggle="tab">Prepa UVM</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_6" class="parent" role="tab" data-toggle="tab">Programas en Línea</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li></ul> </div><div class="col-md-4 col-xs-12"> <div class="tab-content"> <div role="tabpanel" class="tab-pane" id="2_1"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">TSU-mantenimiento-area-industrial-automotriz </a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" class="item" data-toggle="tab">TSU-Perforación-y-servicios-de-producción</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">TSU-Procesos-área-automotiz</a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_2_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_2" class="children" role="tab" data-toggle="tab">Hospitalidad</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_3" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_4" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_5" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_6" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_3"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_3_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_2" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_3" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_4" class="children" role="tab" data-toggle="tab">Revalidaciones</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_5" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_6" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_4"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_4_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_2" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_3" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_4" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_5" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_5"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_5_1" class="children" role="tab" data-toggle="tab">2 años</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_5_2" class="children" role="tab" data-toggle="tab">3 años</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_6"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_6_1" class="children" role="tab" data-toggle="tab">Licenciaturas Ejecutivas en Línea</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_6_2" class="children" role="tab" data-toggle="tab">Posgrados en Línea</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div></div></div><div class="col-md-4 col-xs-12"> <div class="tab-content"> <div role="tabpanel" class="tab-pane" id="2_2_1"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ciencias de la comunicación</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" class="item" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño de la moda e industria del vestido </div></a> </li> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño gráfico</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div> Diseño industrial</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño multimedia y arte digital</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_2"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Internacional en gastronomía</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_3"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Arquitectura</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Desarrollo de tecnologías de información</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería biomédica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería cívil</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingenieria en energa y desarrollo sustentable</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en mecánica eléctrica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en mecatrónica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en negocios y tecnologías de la manufactura</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en petróleo y gas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en sistemas computacionales</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en tecnología interactiva en animación digital</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en telecomunicaciones y electrónica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería industrial y de sistemas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería mecánica industrial</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_4"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de empresas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de empresas turísticas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de negocios internacionales</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Comercio internacional</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Contaduría pública y finanzas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Economía</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Mercadotecnía</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Mercadotecnía deportiva internacional</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Negocios financieros y bancarios</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Negocios gastronómicos</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Relaciones internacionales</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_5"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Cirujano dentísta</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Enfermería</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>fisioterapia</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Medicina</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Medicina veterinaria y zootecnia</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Nutrición</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Psicología</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Químico farmacéutico biotecnólogo</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_6"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Derecho</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"><span><strong>• </strong></span> Pedagogía</a> </li></ul> </div></div></div></div></div></li><li class="col-xs-12 col-md-2 not-on-menu-soy m-academia"> <a href="#">Academia</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-por-que-uvm"> <a href="#">¿Por qué UVM?</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-campus"> <a href="#">Campus</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-financiamiento-y-becas"> <a href="#">Financiamiento y Becas</a> </li></ul> <ul class="clearfix topicss" id="menu-soy"> <li class="col-xs-12" data-soy="publico-en-general"> <a href="#">Soy Público en General</a> </li><li class="col-xs-12 col-md-2" data-soy="aspirante"> <a href="#">Soy Aspirante</a> </li><li class="col-xs-12 col-md-2" data-soy="alumno"> <a href="#">Soy Alumno</a> </li><li class="col-xs-12 col-md-2" data-soy="egresado"> <a href="#">Soy Egresado</a> </li><li class="col-xs-12 col-md-2" data-soy="staff"> <a href="#">Soy Staff</a> </li><li class="col-xs-12 col-md-2" data-soy="padre-de-familia"> <a href="#">Soy Padre de Familia</a> </li><li class="col-xs-12 col-md-2" data-soy="organizacion"> <a href="#">Soy Organización</a> </li></ul> <div class="container change-lenguage not-on-menu-soy"> <div class="col-xs-6 l-espanol"> <a href="#">Español</a> </div><div class="col-xs-6 l-english"> <a href="#">English</a> <span class="circle-form"> <span class="icon i-world-uvm"></span> </span> </div></div></div></nav> </div></div></div></div> <!-- FIN M1 HOME -->';
    var template_header_home = '  <!-- M1 HOME--> <div class="container"> <div class="row header-home"> <div class="col-sm-12"> <div class="vid-container"> <div id="video"></div></div> <div class="col-sm-12 cont-nav-home"> <nav class="navbar-header-min"> <div class="container"> <div class="row"> <div class="col-md-12 superior-bar"> <div class="container"> <div class="col-sm-12 col-md-8 aditional-topics"> <ul> <li> <a class="special" href="#">Aspirantes</a> </li><li> <a href="#">Alumnos</a> </li><li> <a href="#">Egresados</a> </li><li> <a href="#">Académicos</a> </li><li> <a href="#">Administrativos</a> </li><li> <a href="#">Empresas</a> </li></ul> </div><div class="col-sm-12 col-md-4 less-imp-topics"> <ul> <li> <a href="#"> <span class="icon i-chat"></span> </a> </li><li class="search"> <a href="#"> <span class="icon i-search"></span> </a> <div class="data-write"> <form> <input type="text" placeholder="Buscar en UVM"> <button type="submit">Buscar</button> </form> </div></li></ul> </div></div></div><div class="col-md-12 mobile-head"> <div class="container"> <div class="col-xs-2"> <a href="#" class="glyphicon glyphicon-menu-hamburger menu-mobile-button"></a> </div><div class="col-xs-8 logo-container"> <span class="logo"> <a href="#" title="Universidad Del Valle De México">Universidad Del Valle De México</a> </span> </div><div class="col-xs-2"> <a href="#" class="icon i-search"></a> </div><div class="mobile-search-container col-sm-12 col-xs-12"> <div class="data-write"> <form> <input type="text" placeholder="Buscar en UVM"> <button type="submit">Buscar</button> </form> </div></div></div></div><div class="col-sm-4 main-logo col-sm-offset-4"> <h1 class="logo"> <a href="#" title="Universidad Del Valle De México">Universidad Del Valle De México</a> </h1> </div></div></div></nav> <nav class="nav-section nav-claro"> <div class="container"> <ul class="clearfix"> <li class="col-xs-12 cancel-zone"> <span class="wide-b" id="menu-close-container"><span class="glyphicon glyphicon-remove like-anchor menu-mobile-button"></span></span> <span class="wide-a back like-anchor t-center menu-change-soy" id="menu-back-container"><span class="glyphicon glyphicon-chevron-left"></span><span>Volver al Menú</span></span> </li><li class="col-xs-12 col-md-2 menu-change-soy not-on-menu-soy not-desktop-menu" id="menu-change-soy"> <a class="anchor-a">Soy aspirante</a> </li><li class="not-on-menu-soy not-desktop-menu"> <a href="" class="anchor-b">Test Vocacional<span class="glyphicon glyphicon-menu-right"></span></a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-acerca-de-uvm"> <a href="#" class="elements" aria-controls="acerca">Acerca de UVM</a> <div class="submenu clearfix"> <div class="col-md-3 col-xs-12 big-news"> <div class="in-content"> <div class="col-xs-12"> <img width="100%" height="100%" src="https://i.blogs.es/04108f/itn_on_all_devices.jpg_resized_460_/1366_2000.jpeg"> </div><p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> </div></div><div class="col-md-9 col-xs-12 opc-1" > <div class="col-md-4 col-xs-12"> <div class="divider-mobile visible-xs"></div><ul class="tab-elements visible-lg visible-md" role="tablist" id="acerca"> <li role="presentation" class="item"> <a href="#home" aria-controls="" class="parent" role="tab" data-toggle="tab">Cuadro de honor alumnos</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Modelo educativo</a> </li><li role="presentation" class="item"> <a href="#messages" aria-controls="" class="parent" role="tab" data-toggle="tab">Nosotros</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Quienes somos</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="home" class="parent" role="tab" data-toggle="tab">Rectoría Institucional</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="profile" class="parent" role="tab" data-toggle="tab">Somos internacionales</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Somos reconocidos</a> </li></ul> </div></div></div></li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-programas-academicos"> <a href="#" class="elements" aria-controls="programas">Programas Académicos</a> <div class="submenu clearfix"> <div class="col-md-3 big-news"> <div class="in-content"> <p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> <p>Ve nuestros centros especializados</p><a href="" class="btn btn-red">CONOCE MÁS</a> </div></div><div class="col-md-9 opc-2"> <div class="col-md-4 col-xs-12"> <div class="divider-mobile visible-xs"></div><ul class="tab-elements visible-lg visible-md" role="tablist" id="programas"> <li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Educación Continua</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_1" class="parent" role="tab" data-toggle="tab">Instituto Profesional</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2" class="parent" role="tab" data-toggle="tab">Licenciaturas e Ingenierias</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3" class="parent" role="tab" data-toggle="tab">Licenciaturas Ejecutivas</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="parent" role="tab" data-toggle="tab">Oferta educativa</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4" class="parent" role="tab" data-toggle="tab">Posgrados</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_5" class="parent" role="tab" data-toggle="tab">Prepa UVM</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_6" class="parent" role="tab" data-toggle="tab">Programas en Línea</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li></ul> </div><div class="col-md-4 col-xs-12"> <div class="tab-content"> <div role="tabpanel" class="tab-pane" id="2_1"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">TSU-mantenimiento-area-industrial-automotriz </a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" class="item" data-toggle="tab">TSU-Perforación-y-servicios-de-producción</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">TSU-Procesos-área-automotiz</a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_2_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_2" class="children" role="tab" data-toggle="tab">Hospitalidad</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_3" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_4" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_5" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_2_6" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs view-menu-mobile"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_3"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_3_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_2" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_3" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_4" class="children" role="tab" data-toggle="tab">Revalidaciones</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_5" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_3_6" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_4"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_4_1" class="children" role="tab" data-toggle="tab">Diseño Arte y Comunicación</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_2" class="children" role="tab" data-toggle="tab">Ingenieria y arquitectura</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_3" class="children" role="tab" data-toggle="tab">Negocios</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_4" class="children" role="tab" data-toggle="tab">Salud</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_4_5" class="children" role="tab" data-toggle="tab">Sociales</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_5"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_5_1" class="children" role="tab" data-toggle="tab">2 años</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_5_2" class="children" role="tab" data-toggle="tab">3 años</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="" class="children" role="tab" data-toggle="tab">Revalidaciones</a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_6"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" aria-controls="2_6_1" class="children" role="tab" data-toggle="tab">Licenciaturas Ejecutivas en Línea</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li><li role="presentation" class="item"> <a href="#" aria-controls="2_6_2" class="children" role="tab" data-toggle="tab">Posgrados en Línea</a> <ul class="mobile-menu tab-elements visible-xs"></ul> </li></ul> </div></div></div><div class="col-md-4 col-xs-12"> <div class="tab-content"> <div role="tabpanel" class="tab-pane" id="2_2_1"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ciencias de la comunicación</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" class="item" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño de la moda e industria del vestido </div></a> </li> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño gráfico</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div> Diseño industrial</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Diseño multimedia y arte digital</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_2"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Internacional en gastronomía</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_3"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Arquitectura</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Desarrollo de tecnologías de información</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería biomédica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería cívil</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingenieria en energa y desarrollo sustentable</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en mecánica eléctrica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en mecatrónica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en negocios y tecnologías de la manufactura</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en petróleo y gas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en sistemas computacionales</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en tecnología interactiva en animación digital</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería en telecomunicaciones y electrónica</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería industrial y de sistemas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Ingeniería mecánica industrial</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_4"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de empresas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de empresas turísticas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Administración de negocios internacionales</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Comercio internacional</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Contaduría pública y finanzas</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Economía</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Mercadotecnía</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Mercadotecnía deportiva internacional</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Negocios financieros y bancarios</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Negocios gastronómicos</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Relaciones internacionales</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_5"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Cirujano dentísta</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Enfermería</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>fisioterapia</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Medicina</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Medicina veterinaria y zootecnia</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Nutrición</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Psicología</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Químico farmacéutico biotecnólogo</div></a> </li></ul> </div><div role="tabpanel" class="tab-pane" id="2_2_6"> <ul class="tab-elements" role="tablist"> <li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"> <span><strong>• </strong></span> <div>Derecho</div></a> </li><li role="presentation" class="item"> <a href="#" class="last-children" role="tab" data-toggle="tab"><span><strong>• </strong></span> Pedagogía</a> </li></ul> </div></div></div></div></div></li><li class="col-xs-12 col-md-2 not-on-menu-soy m-academia"> <a href="#">Academia</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-por-que-uvm"> <a href="#">¿Por qué UVM?</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-campus"> <a href="#">Campus</a> </li><li class="col-xs-12 col-md-2 not-on-menu-soy menu-financiamiento-y-becas"> <a href="#">Financiamiento y Becas</a> </li></ul> <ul class="clearfix topicss" id="menu-soy"> <li class="col-xs-12" data-soy="publico-en-general"> <a href="#">Soy Público en General</a> </li><li class="col-xs-12 col-md-2" data-soy="aspirante"> <a href="#">Soy Aspirante</a> </li><li class="col-xs-12 col-md-2" data-soy="alumno"> <a href="#">Soy Alumno</a> </li><li class="col-xs-12 col-md-2" data-soy="egresado"> <a href="#">Soy Egresado</a> </li><li class="col-xs-12 col-md-2" data-soy="staff"> <a href="#">Soy Staff</a> </li><li class="col-xs-12 col-md-2" data-soy="padre-de-familia"> <a href="#">Soy Padre de Familia</a> </li><li class="col-xs-12 col-md-2" data-soy="organizacion"> <a href="#">Soy Organización</a> </li></ul> <div class="container change-lenguage not-on-menu-soy"> <div class="col-xs-6 l-espanol"> <a href="#">Español</a> </div><div class="col-xs-6 l-english"> <a href="#">English</a> <span class="circle-form"> <span class="icon i-world-uvm"></span> </span> </div></div></div></nav> </div></div></div></div> <!-- FIN M1 HOME -->';
		var template_footer = '    <!-- FT1 --> <footer> <div class="container" id="more-about-cont"> <div class="col-sm-3 footer-logo"> <a href="#" tittle="Universidad del Valle de México"> <img src="../../assets/img/white-uvm.png"> </a> </div> <div class="col-xs-12 col-sm-4 col-sm-3"> <p class="footer-tittle">Links de Ayuda</p> <p> <a href="#">Trabaja con nosotros</a> </p> <p> <a href="#">Preguntas frecuentes</a> </p> <p> <a href="#">Mapa de sitio</a> </p> </div> <div class="col-xs-12 col-sm-4 col-sm-3 contac"> <p class="footer-tittle">Contáctanos</p> <p> <a href="#"><span class="icon i-telephone"></span> <span>1 800 704 7043</span></a> </p> <p> <a href="#"><span class="icon i-mail"></span> <span>hola@universidaduvm.mx</span></a> </p> <p> <a href="#"><span class="icon i-chat"></span> <span>Chat</span></a> </p> <p> <a href="#"><span class="icon i-id"></span> <span>Directorio UVM</span></a> </p> <p> <a href="#"><span class="icon i-man"></span> <span>Buzón del rector</span></a> </p> </div> <div class="col-xs-12 col-sm-4 col-sm-3 social-media"> <p class="footer-tittle">Social Media</p> <p> <a href="#"><span class="icon i-facebook"></span> <span>Facebook</span></a> </p> <p> <a href="#"><span class="icon i-twitter"></span> <span>Twitter</span></a> </p> <p> <a href="#"><span class="icon i-linkedin"></span> <span>Linked in</span></a> </p> <p> <a href="#"><span class="icon i-youtube"></span> <span>Youtube</span></a> </p> <p> <a href="#"><span class="icon i-rss"></span> <span>Blog</span></a> </p> </div> <div class="col-xs-12 esr"> <div> <img src="../../assets/img/white-esr.png"> </div> </div> </div> <div class="footer-legals"> <div class="extend-footer-btn"> <span class="icon i-arrow-down"></span> </div> <div class="go-to-top"> <span class="icon i-arrow-up"></span> </div> <div class="container"> <div class="row"> <div class="col-sm-12 col-sm-8"> <p>D.R.© Universidad del Valle de México, México. 2016 Laureate International Universities</p> </div> <div class="col-sm-12 col-sm-4 privacy-links"> <p><a href="#">Política de Privacidad</a> | <a href="#">Términos de Servicio</a></p> </div> </div> </div> </div> </footer> <!-- FIN FT1 -->';

		//if ($('body').hasClass('template-all-in')){
    if ($('body').hasClass('template-all-in')){

			var header = ($('body').hasClass('home')) ? template_header_home : template_header;

			$('body').find('.uvm-main-container')
				.prepend(header)
				.append(template_footer);
		}

    if (typeof YTPlayer != "undefined") {
	      var videoHome = $('#video').YTPlayer({
	          fitToBackground: true,
	          videoId: 'LaLzR_U002M',
	      });
    }


	}

 	//Esta función genera los eventos dehover en desktop y click en mobile
	function menusAction(){
		if(!isMobile()){
			initMenuNew();
		}else{
			//Desactiva el hover del menu en desktop
			$('.tab-elements a').off('mouseenter mouseleave');
			$('.tab-pane').removeClass('active');
			$('.opc-1 .col-md-4').removeAttr('style');
			//Valida si el menu ya esta lleno para evitar generar mas elementos en mobile
			if($('.cd-accordion-menu').length == 0)
				initMenuMobile();
		}
	}

	//Esta función es la que genera el permite iniciar el evento de click desde mobile
	function eventMenuMobile(){
		$('.has-children label').on('click',function(){
			var classes = $(this).attr('class'),
			$checked = $(this).siblings('input');
			$element_list = $(this).parent('li');
			list_type = 'p';

			switch(classes){
				case 'parent':
					if($element_list.hasClass('active-'+list_type)){
						$element_list.removeClass('active-'+list_type);
						$('.has-children input').attr('checked',false);
						$('.has-children').removeClass('active-c');
					}else{
						$('.has-children').removeClass('active-p').removeClass('active-c');
						$('.has-children input').attr('checked',false);
						$checked.attr('checked',true);
						$element_list.addClass('active-'+list_type);
					}
					break;
				case 'sub-menu':
					list_type = 'c';
					if($element_list.hasClass('active-'+list_type)){
						$element_list.removeClass('active-'+list_type);
						$element_list.find('input').attr('checked',false);
					}else{
						$('.has-children').removeClass('active-c');
						$('.sub-menu').siblings('input').attr('checked',false);
						$element_list.addClass('active-'+list_type);
						$checked.attr('checked',true);
					}
					break;
			}

		});
	}

	//Esta funcion es la que genera el permite iniciar el evento de hover desde desktop
	function initMenuNew(){
		$('.tab-elements a').hover(function() {
			var $element = $(this),
			tab_element = '#'+$element.attr('aria-controls'),
			element_height = $('.opc-1 .col-md-4');
			if(!isMobile()){
				var alto = $('.opc-1').height();
				element_height.css('height',alto+'px');
			}
			switch($element.attr('class')){
				case 'parent':
					var element = '.children, .last-children';
					$('.parent').removeAttr('data-hover');
					$element.attr('data-hover','activo');
					break;
				case 'children':
					var element = '.last-children';
					$('.children').removeAttr('data-hover');
					$element.attr('data-hover','activo');
					break;
			}
			$(element).removeAttr('data-hover').parents('div').removeClass('active');
			$(tab_element).addClass('active');
		});
	}

	//Esta función es la que genera el codigo html para mobile, obteniendo los creados en desktop
	function initMenuMobile(){
		$(".elements").clone().each(function(idx,el){
			var tab_elementP = '#'+$(el).attr('aria-controls'),
			html = "";
			$parents = $(tab_elementP).find('a.parent').clone();
			//se cargan los elementos padre, el primer nivel del menu
			$($parents).each(function(index, element) {
				var tab_element = '#'+$(element).attr('aria-controls'),
				sub_menu = "",
				$submenuArray = $(tab_element).find('li').clone(),
				sub_menu_2="";
				if($submenuArray.length > 0){
					//se cargan el segundo nivel de menu
					$($submenuArray).each(function(i, val) {
					 	var tab_sub_menu_2 =  '#'+$(val).find('a').attr('aria-controls');
					 	//se cargan el tercer nivel de menu
					 	$sub_menu_2 = $(tab_sub_menu_2).find('ul').clone();
						if($sub_menu_2.length > 0){
					 		sub_menu = sub_menu+'<li class="has-children">'+
					 		'<a href="'+$(val).find('a').attr('href')+'">'+$(val).text()+'</a>'+
							'<label class="sub-menu" for="sub-group-'+i+'"></label>'+
							'<ul>'+
								$($sub_menu_2).html()+
							'</ul>'+
							'</li>';
						}else{
							sub_menu = sub_menu+'<li role="presentation" class="item">'+
	                            '<a href="'+$(val).find('a').attr('href')+'" class="last-children" role="tab" data-toggle="tab">'+
	                            $(val).text()+'</a>'+
	                          	'</li>';
						}
					});

					html = html+'<ul class="cd-accordion-menu">'+
						'<li class="has-children">'+
							'<a href="'+$(element).attr('href')+'">'+$(element).html()+'</a>'+
							'<label class="parent" for="group-'+index+'"></label>'+
							'<ul class="list-sub-menu">'+
								sub_menu+
							'</ul>'+
						'</li>'+
					'</ul>';
				}else{
					html = html+'<ul class="cd-accordion-menu">'+
						'<li class="no-elements">'+
							'<a href="'+$(element).attr('href')+'">'+$(element).html()+'</a>'+
						'</li>'+
					'</ul>';
				}

			});
			$(tab_elementP).siblings('div').append(html);
		});
		eventMenuMobile();
	}

	function initCalendario(){

		if ($('.component-c32').length > 0){

	      $calendarios = $('.component-c32');

	      for (var i = 0; i < $calendarios.length; i++) {

	        var id = 'ccalendar-' + (i+1);

	        $($calendarios[i]).find('.calendar-container').attr('id', id);
	        var $calendario = $($calendarios[i]).find('.calendar-container'),
	        	informacionCalendario = {
					//JSON.parse($calendario.data('eventos'))
					activo: ($calendario.data('actual')) ? $calendario.data('actual') : 'month',
					eventos: ($calendario.data('eventos') && $calendario.data('eventos').length > 0) ? $calendario.data('eventos') : [],
					fechaInicio: ($calendario.data('fechainicio')) ? $calendario.data('fechainicio') : moment().format('YYYY-MM-DD')
				};

	        $('#' + id).fullCalendar({
	          lang: 'es',

	          header: {
	            left: 'prev,next',
	            center: 'title',
	            right: 'today, month, basicWeek, basicDay'
	          },
	          defaultDate: informacionCalendario.fechaInicio,
	          editable: false,
	          eventLimit: false,
	          events: informacionCalendario.eventos
	        });
	      }
	    }
	}
	function isMobile(){

		var width = $(window).width();

		if(width<830){
			return true;
		}

		return false;
	}

	function sliderData(){

		var $slides = $('.carousel .carousel-inner .item');

		$slides.each(function(i, $slider) {
			if($(this).data("json").date == dates.today) offers.push($(this).data("json"));
		});
	}

	function menuMobile(){

		$('nav').on( "click", ".menu-mobile-button", function(event) {
			event.stopPropagation();
			$('.nav-section').toggleClass('mobile-active');
			$('#bg-popup').toggleClass('mobile-active');
		});

		$('nav').on("click", ".menu-change-soy", function(event){
			event.stopPropagation();
			$('.nav-section').toggleClass('mobile-menu-soy');
		});

		$('#menu-soy').on("click", "li", function(event){
			event.stopPropagation();
			var soy = { 'slug' : $(this).data('soy'), 'name' : $(this).children('a').text()};
			sessionStorage.setItem("soy", JSON.stringify(soy));
			location.reload();
		});

		$('.extend-footer-btn').on( "click", ".icon", function(event) {
			event.stopPropagation();
			$('#more-about-cont').toggleClass('active');
			$('.extend-footer-btn').toggleClass('active');

		});

		scrollTopFooter();
		setMenu();

	}

	function scrollTopFooter(){

		$('.go-to-top').on( "click", ".i-arrow-up", function(event) {
			event.stopPropagation();
			$("html, body").animate({
	            scrollTop: 0
	        }, 400);
	        return false;
		});

		hide($(window));

		$(window).scroll(function () {
		 	hide($(this));
	    });

		 function hide($element){
		 	if ($element.scrollTop() > 100) {
	            $('.go-to-top').show();
	        } else {
	            $('.go-to-top').hide();
	        }
		 }
	}

	function setMenu(){
		var soy = sessionStorage.getItem("soy");
		soy = soy==null ? {'slug' : 'general', 'name' : 'Soy Público en General' } :  JSON.parse(soy) ;
		$('#menu-change-soy a').text(soy.name);

	}

	var componentsSelect = [
		{ selector : '.component-d4', active : '.select-field', data : null },
		{ selector : '.component-cp', active : '.select-field', data : 'thumb' },
		{ selector : '.component-cp-prepa', active : '.select-field', data : 'thumb' }
	];

	var componentsForm = [
  		{ selector : '.component-f2' },
  		{ selector : '.component-f1' },
  		{ selector : '.component-c22' },
  		{ selector : '.component-c4' },
  		{ selector : '.component-c49' },
  		{ selector : '.component-c72' }
  	];

  	function initSelectDependants(){

  		componentsSelect.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
  				initSelect(selector);
  			}
  		});

  		function initSelect(selector){
  			var $selects = $(selector.selector + ' ' + selector.active);

	  		$selects.each(function(i, $selector) {
	  			generateSelects(selector, $selector, this);
			});
  		}

  		function generateSelects(selector, $selector, element){

  			var dependant = $(element).data("dependant");
  			var source = $(element).data("source");
  			var title = $(element).data("title");

  			if( dependant ){
  				var select = '<select><option value="0">'+title+'</option>';
	  			select += '</select>';

	  			$($selector).html(select);

	  			$(dependant).on('change', 'select' ,function() {

	  				if($(this).val() != 0){
				 		createSelect(selector.data, $selector, title, source, $(this).val());
				 	}
				 	else{
				 		var select = '<select><option value="0">'+title+'</option>';
			  			select += '</select>';
			  			$($selector).html(select);

				 	}
				});

			}else if(source){
				createSelect(selector.data, $selector, title, source , 0);
			}
  		}

  		function createSelect(theData, element, name, source, value){

  			var options = [];

  			$.getJSON( source , {
			    id: value
			  },function( data ) {

			  $.each( data, function( key, val ) {

				  	if(theData){
				  		options.push( "<option value='" + val.id + "' data-"+theData+"='"+val[theData]+"'>" + val.value + "</option>" );
				  	}
				  	else{
				  		options.push( "<option value='" + val.id + "'>" + val.value + "</option>" );
				  	}

			  });


			}).always(function() {
			    var select = '<select><option value="0">'+name+'</option>';
	  			select += options.join( "" );
	  			select += '</select>';

	  			$(element).html(select);

	  			if(isComparador){
	  				updateMobileOptions();
	  			}
			});

  		}


  	}

  	function initf3(){
  		var $form = $('.component-f3');

  		if ($form.length > 0){
  			$form.on("click", ".btn-modal.close", function(){
  				$form.find('.content-f3').hide().removeClass('opened');
  				$form.find('.btn.load-more').show();
  			});
  		}
  	}

  	function initLoadMore(){
  		var $loadMore = $('.btn-cont .load-more');


		$loadMore.each(function(i, $slider) {
			if($(this).data("show")){
				var $show = $($(this).data('show'));
				$show.hide();
			}
		});

  		$('.btn-cont').on("click", ".load-more", function(event){
			event.stopPropagation();
			$(this).hide();
			var $show = $($(this).data('show'));
			$show.show().addClass('opened');
		});
  	}

	function initFormGeneral(){

  		componentsForm.forEach(function(component) {
  			var $components = $(component.selector);
  			if ($components.length > 0){

  				$components.each(function(index){
  					initForm($(this));
  				});

  			}
  		});

  		function initForm(selector){
  			var $form = $(selector);
  			var $success = $(selector).find(' .cont-send-alert');
			var $fail = $(selector).find(' .cont-failed-alert');

  			$success.hide();
  			$fail.hide();

  			$form.submit(function( event ) {
			  event.preventDefault();
			  postForm(selector);
			});
  		}

  		function postForm(selector){

			var self = $(selector).serialize();
			var $success = $( selector).find(' .cont-send-alert');
			var $fail = $( selector).find(' .cont-send-alert');
			var $form = $( selector).find('form');

			$success.hide();
  			$fail.hide();

			$.ajax({
		         data: self,
		         type: 'POST',
		         url: 'http://multiplicamx.com/cliente/2016/UVM/servicios/form.php',
		         dataType: 'json',
		         success: function(data) {

		         	if(data.success){
		         		$form.hide();
		         		$success.show();
		         	}
		         	else{
		         		$fail.show();
		         	}

		        },
		        error: function(jqXHR, textStatus, errorThrown) {
		        	console.log(jqXHR, textStatus, errorThrown);
				}
		    });
		}

  	}

  /*Funciónes generales*/
  	function scrollToElement(element){

  		function timeAnimation(element_distance){
  			var distance = element_distance - window.pageYOffset;
  			var max_time_animation = 500;
  			var min_distance_for_max_time = 400;

  			var time = Math.floor((distance*max_time_animation)/min_distance_for_max_time);

  			return (time <= max_time_animation) ? time : max_time_animation;
  		}



  		// Visibilidad del menú mobile
  		var menu_mobile = ($('.mobile-head').css('display') == 'block'),
  		// Adición del height del menu fixed al scroll
  			adicion = aditionalMenuHeight();



	  		function aditionalMenuHeight(){

	  			var height = 0;

	  			if (element.isAfter($('.component-m2').closest('section'))){
	  				height = (-1)*($('.component-m2').length > 0) ? $('.component-m2').height() : $('.nav-section').height();
	  			}
	  			else if ($('.component-m2.fixed-element, .nav-section.fixed-element').length > 0 ){
	  				height = ($('.component-m2.fixed-element').length > 0) ? $('.component-m2.fixed-element').height() : $('.nav-section.fixed-element').height();
	  			}

	  			//console.log(height);
	  			return  height;
	  		}

	  	//console.log(element.offset().top, $('.component-m2, .nav-section').offset().top);


  		// Si hay menú mobile se cambia la adición al alto del menú (el menú fixed m2 desaparece)
  		if (menu_mobile)
  		{
  			adicion = $('.mobile-head').height();
  		}


  		var element_distance = element.offset().top - adicion;
  		//Realizamos el posicionamiento del scroll
		$('html, body').animate({
			scrollTop: element_distance
		}, timeAnimation(element_distance), function(){
			if($('body').hasClass('fixed-scroll')){
				setTimeout(function(){
					$('body').removeClass('fixed-scroll');
				}, 100);
			}
		});

  	}

  	function popClass(element, parentPopClass){
		element.addClass('mobile-open-pop').addClass('active');

	 	if(element.length>0)
	 		$('body').addClass('mobile-fixed');

		if (parentPopClass){
			element.parents(parentPopClass).addClass('has-pop-opened');
		}


	}

	//Remover clases
	function removerClase(element,clase){
		element.removeClass(clase);
	}

	function closeElement(component, elementToHide, elementRemoveClass, parentRemovePopClass){
		component.on( "click", ".close", function(event) {
			event.stopPropagation();

			elementToHide.hide();

		  	if(typeof elementRemoveClass == 'undefined'){
				elementRemoveClass = elementToHide.parent();
			}

			removerClase(elementRemoveClass, 'active');

			if(parentRemovePopClass){
				removerClase(elementToHide.parents(parentRemovePopClass), 'has-pop-opened');
			}
			//Buscar elemento que lo activo para removerle la clase

			var $parent_active = elementRemoveClass.parent().find('.active');

			if ($parent_active.length > 0)
			{
				removerClase($parent_active, 'active');
			}

			if($('body').hasClass('mobile-fixed'))
			{
				$('body').removeClass('mobile-fixed');

				scrollToElement(elementToHide.parent('.mobile-open-pop').parent());

			}


		});

	}

	// Mostrar conenido
	// Se añade tercer parametro parent_element, si existe, se hará scroll a ese elemento.
	function showCurrentContent(element, scroll, parent_element){
		//console.log('E', element, 'P', parent_element);

		if(typeof scroll == 'undefined'){
			scroll = true;
		}

		if(typeof element != 'undefined' && element.length>0){
			element.show().siblings().hide();

			if(scroll){
				var scroll_element = (!parent_element) ? element : parent_element;
				scrollToElement(scroll_element);
			}
		}
	}

	function hideAllB(element){
		element.hide();
	}

  /*Funciónes por componentes*/

	function mComponentMenu(){

		inyectarPopUp();

		var menu = $('.nav-section .container >ul >li');
		var submenu = $('.nav-section .container >ul >li .submenu >div .particular-item');
		var timerId;
		var timer = 0;
		var time = 10;

		menu.mouseover(function () {
			if(!isMobile()){
				timer = 0;
				clearInterval(timerId);
				menu.removeClass('hover');
			    $(this).addClass('hover');
			}
		});

		menu.mouseleave(function () {
			if(!isMobile()){
				var element = $(this);
				timerId = setInterval(function(){
					closeMenu(element);
				}, time);
			}
		});

		menu.click(function(event){

			if(isMobile()){
				var element = $(this);

				if(!element.hasClass('hover') && $(event.target).parent().hasClass('not-on-menu-soy')){
					menu.removeClass('hover');
				    element.addClass('hover');
				}
				else if($(event.target).parent().hasClass('not-on-menu-soy')){
					element.removeClass('hover');
				}
			}
		});

		function closeMenu(element){
			if (timer == 60) {
				element.removeClass('hover');
				clearInterval(timerId);
			} else {
				timer++;
			}
		}

		submenu.click(function(event) {
			event.stopPropagation();
			if($(this).hasClass('active')){
				$(this).removeClass('active').find(".children-item").slideUp();
			}
			else{
				submenu.removeClass('active').find(".children-item").slideUp();
				$(this).addClass('active').find(".children-item").slideDown();
			}

		});

		appendMenu1BlankSpace();

	}

  	function appendMenu1BlankSpace(){
  		var html_space = '<div class="m1-fixed-space hidden-xs"></div>';
  		$(html_space).insertAfter('.nav-section');
  	}


	function inyectarPopUp(){
		var $nav = $('nav.nav-section'),
			htmlPop = '<div class="back-black" id="bg-popup"></div>';

		$(htmlPop).insertAfter($nav);
	}

	function mComponentSlideDown(){

		var submenu = $('.c-slideDown >a');

		submenu.click(function(event) {
			event.preventDefault();
			event.stopPropagation();

			if($(this).hasClass('active')){
				$(this).removeClass('active');
			}
			else{
				submenu.removeClass('active');
				$(this).addClass('active');
			}

		});
	}

	function mComponentC27() {

		var componentC27 = $('.component-c27');
		var botonesContainer = $('.component-c27 .buttons-zone');
		var tabs = $('.component-c27 .tab-zone >div');



		hideAllB(tabs);

		botonesContainer.on( "click", ">a", function(e) {
			e.preventDefault();
			var index = $('.component-c27 .buttons-zone >a').index(this);
			addActiveClass($(this));

			var element = tabs.eq(index);

			showCurrentContent(element);
		});

		function addActiveClass(element){
			element.addClass('active').siblings().removeClass('active');
		}

	}

  function mComponentC29() {

    var botonesContainer = $('.component-c29 >ul.buttons-zone li');
    var botones = $('.component-c29 >ul.buttons-zone li >a');
    var tabs = $('.component-c29 .cont-expanded .expanded-link');


	tabs.on("click", ".btn-modal.close", function(){
		botones.removeClass('active');
		$(this).parent('.expanded-link').hide();
		//$form.find('.btn.load-more').show();
	});

    hideAllB(tabs);
    appendSelectElements();
    componentActions();

	function componentActions(){

		botonesContainer.on( "click", ">a", function(e) {
	    	e.preventDefault();
		 	var index = $('.component-c29 .buttons-zone li >a').index(this);
		 	var parent = $(this).parents('.component-c29');
		 	addActiveClass($(this));

		 	var element = tabs.eq(index);
		 	showCurrentContent(element);
		});

		var selectContainer = $('.component-c29 .select-field');

		selectContainer.on('change', 'select' ,function() {
		 	var index = $(this).val();
		 	var parent = $(this).parents('.component-c29');
		 	var element = tabs.eq(index);
		 	showCurrentContent(element);
		});
	}

	function addActiveClass(element){
		botones.removeClass('active');
		element.addClass('active');
	}

	function appendSelectElements(){

		var $botonesPB = $('.component-c29 >ul.buttons-zone');
		var opciones = getSelectOptions();
		var t = 0;

		$botonesPB.each(function(i, $e) {
			var total = $($e).children('li').length;
			var opcionesSelect = '';

			for (var j = 0; j < total; j++) {
				opcionesSelect+= '<option value="'+t+'">'+opciones[t]+'</option>';
				t++;
			}

			appentToSelect(opcionesSelect, $($e));

		});

	}

	function appentToSelect(opciones, $elemento){
		$elemento.parent().prepend('<div class="col-xs-12 visible-sm-block visible-xs-block hidden-md hidden-lg"><div class="data-write select-field"><select class="">'+opciones+'</select></div></div>');
	}


	function getSelectOptions(){

  		var $menuElements = botones;
  		var opciones = [];

  		$menuElements.each(function(i, e) {
  			var opcion = $(e).text();
  			opciones.push(opcion);
		});

		return opciones;

  	}

  }
  var componentMenuM1 = [
  		{ selector : '.less-imp-topics'},


  	];

  	function initMenuM1(){

  		componentMenuM1.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			initMenu(selector);
	  		}
  		});

  		function initMenu(selector){
  			addMobileInputSearch();
  			addMobileQLAction();
  			componentActions(selector);


  		}

  		//PARA MENÚ MOBILE
  		function addMobileInputSearch(){

  			$(".mobile-head").on( "click", '.i-search', function(e) {
  				e.preventDefault();
	  			$('.mobile-search-container').toggleClass('active')
	  			$(this).toggleClass('active');
			});

  		}

  		//Mostrar QL en mobile
  		function addMobileQLAction(){

  			$("nav").on( "click", '.menu-mobile-ql', function(e) {
  				e.preventDefault();
	  			$('.component-ql').toggleClass('active')
	  			$('.i-signlist').toggleClass('active');
	  			$('#bg-popup').toggleClass('mobile-active');
			});

  			$('#open-ql-btn').click(function(e){
  				$('.component-ql').toggleClass('open');
  			});


  		}


  		function componentActions(selector){

  			$(selector.selector).on( "click", '.language >a', function(e) {
	  				e.preventDefault();
		  			$(this).parent().siblings().removeClass('active');
		  			$(this).parent().toggleClass('active');
			});

			$(selector.selector).on( "click", '.language .data-languages >a', function(e) {
	  				e.preventDefault();
		  			$(this).parent().parent().find('.current').text($(this).text());
		  			$(this).parent().parent().siblings().removeClass('active');
		  			$(this).parent().parent().toggleClass('active');
			});

			$(selector.selector).on( "click", '.language .data-languages >div', function(e) {
		  			$(this).parent().parent().siblings().removeClass('active');
		  			$(this).parent().parent().toggleClass('active');
			});

  			$(selector.selector).on( "click", '.search a', function(e) {
  				e.preventDefault();
	  			$(this).parent().siblings().removeClass('active');
	  			$(this).parent().toggleClass('active');
	  			$(this).parent().closest('.navbar-header-min').toggleClass('active');
			});
  		}
  	}

  	var mobileComponentsSelectorPop = [
  		{ selector : '.component-c34', active : '>div', 'showFirst' : false, scrollToButtonsArea: true },
  		{ selector : '.component-c38', active : '>div', 'showFirst' : false, scrollToSpecificArea: '.info'  },
  		{ selector : '.component-c41', active : '>div', 'showFirst' : false, 'scrollToSection' : true, parentPopClass: true },
  		{ selector : '.component-c46', active : '.int>a', 'showFirst' : false, scrollToSpecificArea: 'strong' },
  		{ selector : '.component-c47', active : '>div a', 'showFirst' : false, scrollToButtonsArea: true  },
  		{ selector : '.component-c53', active : '>div', 'showFirst' : false, scrollToButtonsArea: true },
  		{ selector : '.component-c55', active : '>div a', 'showFirst' : false, innerContent: true },
  		{ selector : '.component-c63', active : '>div', 'showFirst' : true, scrollToButtonsArea: true },
  		{ selector : '.component-c63a', active : '>div', 'showFirst' : true, scrollToButtonsArea: true },
  		{ selector : '.component-c64', active : '>div', 'showFirst' : true, scrollToButtonsArea: true },
  		{ selector : '.component-c64a', active : '>div', 'showFirst' : true, scrollToButtonsArea: true },
  		{ selector : '.component-c64b', active : '>div', 'showFirst' : true, scrollToButtonsArea: true },
  		{ selector : '.component-c64c', active : '>div', 'showFirst' : true, scrollToButtonsArea: true},
  		{ selector : '.component-c67', active : '>div', 'showFirst' : false, scrollToButtonsArea: true  },
  		{ selector : '.component-c68', active : '>div', 'showFirst' : false, scrollToActiveButton: true },
  		{ selector : '.component-c20', active : '>div', 'showFirst' : false, scrollToButtonsArea: true },
  		{ selector : '.component-c20b', active : '>div', 'showFirst' : false, scrollToButtonsArea: true },
  		{ selector : '.component-c20c', active : '>div', 'showFirst' : false, scrollToButtonsArea: true },
  		{ selector : '.component-c21a', active : '>div', 'showFirst' : false, scrollToButtonsArea: true },
  		{ selector : '.component-c15', active : '.cont-btn', 'showFirst' : false, innerContent: true},
  		{ selector : '.component-c61', active :'>div', 'showFirst' : true, scrollToButtonsArea: true},
  		{ selector : '.component-c57', active :'>div', 'showFirst' : true, scrollToButtonsArea: true},
  		{ selector : '.component-c50', active : '.more', 'showFirst' : false},
  		{ selector : '.component-c72', active : 'li a', 'showFirst' : false},
  		{ selector : '.component-c5b', active : '>div', 'showFirst': false},
  		{ selector : '.component-c5c', active : '>div', 'showFirst': false}

  	];

  	var componentsPopUp = [
  		{ selector : '.component-pha', active : '>div' , 'showFirst': true}
  	];

  	var componentsCerrar = [
  		{ selector : '.component-c22', active : '>div'},
  		{ selector : '.component-c49', active : '>div'},
  		{ selector : '.component-ah', active : '>div'},
  		{ selector : '.component-ac', active : '>div'}
  	];

  	var componentsPestana = [
  		{ selector : '.component-c27', active : '>a'},
  		{ selector : '.component-c48', active : '>a'},
  		{ selector : '.component-m3', active :' >div.cont-button'},
  		{ selector : '.component-m4', active :' >div.cont-button'},
  		{ selector : '.component-m4a', active :' >div.cont-button'},
  		{ selector : '.component-m5', active :' >div.cont-button'},
  		{ selector : '.component-m6', active :' >div.cont-button'}
  	];

  	var componentsSlider = [
  		{ selector : '.slider-i5', thumbnail : false },
  		{ selector : '.slider-c54', thumbnail : false },
  		{ selector : '.slider-c19', thumbnail : true },
  		{ selector : '.slider-c20', thumbnail : false },
  		{ selector : '.slider-c28', thumbnail : false },
  		{ selector : '.slider-i13', thumbnail : false },
  		{ selector : '.component-slider-full', thumbnail : false, 'fade': true}

  	];

  	var componentsMenuInteractivo = [
  		{ selector : '.component-c57' }
  	];

  	function initSliderGeneral(){

  		componentsSlider.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			initSlider(selector);
	  		}
  		});

  		function initSlider(selector){

  			var $sliders = $(selector.selector);

  			$sliders.each(function(sliderIndex){
	  			var $slides = $(this).find('.swiper-wrapper .swiper-slide');
	  			var html_gallery = '';

		  		$slides.each(function(i, e) {

		  			var $element = $(e);
		  			var image = $element.data("img");
		  			var excerpt = $element.data("excerpt");
		  			var title =  $element.data("titulo");
		  			var subtitle =  $element.data("subtitulo");

		  			$(this).attr("data-slide-index", i);

		  			var insert = '<img src="'+image+'"/>';

		  			if(selector.selector === '.component-slider-full'){
		  				insert = '<div class="image-content"><img src="'+image+'"/></div>';
		  				insert+='<div class="text-content"> <h2>'+title+'</h2> <p>'+subtitle+'</p> </div>';
		  			}

		  			if(excerpt){
		  				insert+= '<p>'+excerpt+'</p>';
		  			}



					$element.append(insert);

					if(selector.thumbnail){
						html_gallery += '<div class="swiper-slide thumb" data-slide-main-index="'+ i +'"><img src="'+image+'"></div>';
					}
				});

			    if(selector.thumbnail){

			    	$(this).find('.gallery-thumbs .swiper-wrapper').append(html_gallery);
			    	var total = $(this).find('.gallery-thumbs').length;
			    	var galleryTop = [];
			    	var galleryThumbs = [];


					    $(this).find('.gallery-top').addClass('swiper-'+sliderIndex);
					    $(this).find('.gallery-thumbs').addClass('swiper-'+sliderIndex);
					    var i = sliders.length;
					    var j = sliders.length+1;
					    var slider_id = 'slider' + i;
					    var slider_thumbs_id = 'slider' + j;

					    $(this).find('.gallery-top.swiper-'+sliderIndex)
					    	.attr('id', slider_id)
					    	.attr('data-slider-id', i);

					    $(this).find('.gallery-thumbs.swiper-'+sliderIndex)
					    	.attr('id', slider_thumbs_id)
					    	.attr('data-slider-id', j);
	    				// $('.s'+index).swiper();

	    				// Galería general
	    				var topgall = new Swiper($('#' + slider_id), {
					        nextButton: '#' + slider_id + ' .swiper-button-next',
							prevButton: '#' + slider_id + ' .swiper-button-prev'
							/*onSlideChangeStart: function(swiper){
								//console.log('Cambio Inicial', swiper)
							},
							onSlideChangeEnd: function(swiper){
								//console.log('Cambio Final', swiper.activeIndex, sliders[j].activeIndex )
								if (sliders[j].activeIndex != swiper.activeIndex){
									sliders[j].slideTo(swiper.activeIndex);
								}
							},
							onSlideNextStart: function(swiper){
								//console.log('ASDF', swiper.activeIndex)
							}*/
					    });

					  	sliders.push ( topgall );

					  	// Galerias de thumbs
					  	var thumbgall = new Swiper($('#' + slider_thumbs_id), {
					        spaceBetween: 10,
					        slidesPerView: 4,
					        touchRatio: 0.2,
					        loop:false,
					        //loopedSlides: 5,
					        slideToClickedSlide: true,

					        centeredSlides: true
							/*onSlideChangeStart: function(swiper){

								var active_slide = (swiper.activeIndex) ? swiper.activeIndex : 0;
								var active_main_slide = swiper.slides[active_slide].getAttribute('data-slide-main-index');

								sliders[i].slideTo(active_main_slide);
							}*/
					    });

					    sliders.push ( thumbgall );

					    sliders[i].params.control = sliders[j];
					    sliders[j].params.control = sliders[i];



					//console.log(sliders);

			    }
			    else{

		  			//creamos un nuevo swiper en nuestro arreglo de sliders por cada .swipercontainer
		  			$(this).find('.swiper-container').not('.gallery-thumbs').each(function(){
		  				var slider_id = 'slider' + sliders.length;

		  				$(this)
		  					.attr('id', slider_id)
		  					.attr('data-slider-id', sliders.length);

		  				var slider_opt = {
		  					pagination: '#' + slider_id + ' .swiper-pagination',
					        paginationClickable: true,
					        nextButton: '#' + slider_id + ' .swiper-button-next',
				        	prevButton: '#' + slider_id + ' .swiper-button-prev',
				        	autoHeight : true
		  				};

		  				if(selector.fade){
		  					slider_opt.effect = 'fade';
		  				}

				  		sliders.push(new Swiper(this, slider_opt));
		  			})



			    }
			});
	  	}
  	}


  	function updateMobileOptions(){
		var selects = ['#vertical1', '#licenciatura1', '#vertical2', '#licenciatura2', '#opcion-comparador1', '#opcion-comparador2'];
		var stepToShow = [1,2,3,4,1,2];

		var selectsMobile = ['#component-comparador .step-2 .line-carrer', '#component-comparador .step-3 .pick-carrer', '#component-comparador .step-4 .line-carrer', '#component-comparador .step-5 .pick-carrer', '#component-comparador-prepa .step-2 .pick-carrer', '#component-comparador-prepa .step-3 .pick-carrer'];

		selects.forEach(function( selector, key ) {

			if($(selector).length>0){

				var options = $(selector +' select option');
				$(selectsMobile[key]).html('');

				var step =  stepToShow[key];

				var values = $.map(options ,function(option) {

					if(option.value!=0){

						var $option = $(option);
						var titulo = $option.text();
						var html = '<li data-selector="'+selector+'" data-value="'+option.value+'" data-step="'+step+'"><a href="#">';

						if($option.data('thumb') !='undefined'){
			            	html+='<img src="'+$option.data('thumb')+'" alt="'+titulo+'">';
			            }
			            html+='<p>'+titulo+'</p></a>';
			           	html+='</li>';

			           	$(selectsMobile[key]).append(html);

			         }

				});
			}

		});

	}

function initComparadorPreparatoria(){

	var sliderMobile = null;
	var planesId = [];
	var steps = $('#component-cpm-prepa .step');
	initComparador();

	function initComparador(){
		var $component = $('.component-cp-prepa');

  		if($component.length>0){

  			isComparador = true;
  			initComparadorDesktop();
  			setTimeout(function(){
  				appendMobileComparador();
  			 }, 1000);

  		}
	}

	function appendMobileComparador(){
		var $component = $('#component-comparador-prepa');

		// PARA CUANDO LO JALA DEL TEMPLATE
		// $.get( "../../templates/comparador-prepa-mobile.html", function( data ) {
		// 	console.log(data);
		//   	$component.append( data );
		//   	initComparadorMobile();
		// });

		//var data ='<div class="component-wrapper visible-block-xs hidden-sm hidden-md hidden-lg" id="component-cpm-prepa"> <section class="block-uvm"> <div class="component-wrapper"> <div class="row component-cpm"> <div class="step step-1" data-step="1"> <header> <h2>Te ayudamos a decidir</h2> <p>¿Dos o tres años? ¿Bachillerato o prepa?</p> </header> <!-- Paso 1 --> <div class="in-content"> <div class="limit-content"> <button class="btn btn-red actionStep" data-show="2">Compara</button> </div> </div> </div> <div class="step step-2" data-step="2"> <!-- Paso 2 --> <div class="btn-cont"> <button class="btn btn-special actionStep" data-show="1"> Regresar </button> </div> <div class="heading-programs"> <h2>Opción 1</h2> </div> <div class="in-content"> <div class="limit-content"> <p class="inst">¿Prepa? ¿Dos o tres años?</p> <ul class="pick-carrer"> </ul> </div> </div> </div> <div class="step step-3" data-step="3"> <!-- Paso 3 --> <div class="btn-cont"> <button class="btn btn-special actionStep" data-show="2"> Regresar a Opción 1 </button> </div> <div class="heading-programs"> <h2>Opción 2</h2> </div> <div class="in-content"> <div class="limit-content"> <p class="inst">¿Bachillerato? ¿Dos o tres años?</p> <ul class="pick-carrer"> </ul> </div> </div> </div> <div class="step step-4" data-step="4"> <div class="swiper-button-next glyphicon glyphicon-chevron-right"></div> <div class="swiper-button-prev glyphicon glyphicon-chevron-left"></div> <div class="swiper-container"> <div class="btn-cont"> <button class="btn btn-special actionStep" data-show="3"> Regresar a elegir </button> </div> <div class="heading-programs swiper-pagination"></div> <div class="swiper-wrapper"> <div class="swiper-slide video-slide"> <!-- Paso 10 --> <div class="in-content"> <div class="divided-c"> <div class="halff"> <p class="title"></p> <div class="row component-c14"> <div class="col-sm-4"> <div class="iframe"> <div class="iframe-sec cont-iframe"> </div> <div class="description-iframe"> <p class="tittle-i"></p> <p class="subtittle-i"></p> <p class="date-i"></p> </div> </div> </div> <div class="col-sm-4"> <p class="t-center t-descripcion"></p> </div> </div> </div> <div class="halff"> <p class="title"></p> <div class="row component-c14"> <div class="col-sm-4"> <div class="iframe"> <div class="iframe-sec cont-iframe"> </div> <div class="description-iframe"> <p class="tittle-i"></p> <p class="subtittle-i"></p> <p class="date-i"></p> </div> </div> </div> <div class="col-sm-4"> <p class="t-center t-descripcion"></p> </div> </div> </div> </div> </div> </div> <div class="swiper-slide two"> <!-- Paso 7 --> <div class="in-content"> <div class="divided-c"> <div class="halff"> <p class="title"></p> <div class="duracion"></div> <div class="clearfix"> <div class="data-write send"> <div class="btn-cont materias-url"> <a class="btn btn-red" target="_blank">Consulta Materias</a> </div> <div class="btn-cont calendario-url"> <a class="btn btn-red" target="_blank">Consulta Calendario</a> </div> </div> <div class="excerpt"> <p>*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.</p> </div> </div> </div> <div class="halff"> <p class="title"></p> <div class="duracion"></div> <div class="clearfix"> <div class="data-write send"> <div class="btn-cont materias-url"> <a class="btn btn-red" target="_blank">Consulta Materias</a> </div> <div class="btn-cont calendario-url"> <a class="btn btn-red" target="_blank">Consulta Calendario</a> </div> </div> <div class="excerpt"> <p>*La orientación estratégica de la carrera, fundamentada en nuevos modelos de negocio y certificaciones internacionales brindan una clara ventaja competitiva a nuestros egresados.</p> </div> </div> </div> </div> </div> </div> <div class="swiper-slide por-que-uvm-slide"> <header> <h2>¿Por qué elegir UVM?</h2> <p>Te brindamos las mejores opciones pensando en ti</p> </header> <div class="in-content"> </div> </div> <div class="swiper-slide campus-slide"> <!-- Paso 12 --> <div class="in-content"> <div class="divided-c"> <div class="halff"> <p class="title"></p> <span class="big-red">¿Dónde podrás estudiarla?</span> <div class="row component-t3 campus-container"> </div> </div> <div class="halff"> <p class="title"></p> <span class="big-red">¿Dónde podrás estudiarla?</span> <div class="row component-t3 campus-container"> </div> </div> </div> </div> </div> <div class="swiper-slide colegiatura-slide"> <!-- Paso 13 --> <div class="in-content"> <div class="divided-c"> <div class="halff"> <p class="title"></p> <div class="colegiatura-container"> <strong>Colegiaturas desde:</strong> <p class="lite">$ <strong class="green"></strong> mensuales</p> </div> <div class="links-container"> <a href="#" data-title="CALCULAR COLEGIATURA" class="calcular"></a> <a href="#" data-title="IR A PÁGINA DEL PROGRAMA" class="programa"></a> </div> </div> <div class="halff"> <p class="title"></p> <div class="colegiatura-container"> <strong>Colegiaturas desde:</strong> <p class="lite">$ <strong class="green"></strong> mensuales</p> </div> <div class="links-container"> <a href="#" data-title="CALCULAR COLEGIATURA" class="calcular"></a> <a href="#" data-title="IR A PÁGINA DEL PROGRAMA" class="programa"></a> </div> </div> </div> <div class="btn-cont"> <button class="btn btn-red actionStep" data-show="5">Más información</button> </div> </div> </div> </div> </div> </div> <div class="step step-5" data-step="5"> <!-- Paso 4 --> <div class="btn-cont"> <button class="btn btn-special beginSlide actionStep" data-show="4"> Regresar a comparar </button> </div> <div class="in-content"> <div class="limit-content"> <span class="big-red">¿Quieres saber más?</span> <p class="inst">Recibe por correo el comparativo completo con costos y opciones de financiamiento.</p> <div class="form-gray-bg"> <form> <div class="data-write"> <input placeholder="Juán Fernández"> <label class="icon-label"><span class="glyphicon glyphicon-star"></span></label> </div> <div class="data-write"> <input placeholder="04455 3471 0988"> <label class="icon-label"><span class="glyphicon glyphicon-star"></span></label> </div> <div class="data-write"> <input placeholder="juan@correo.com"> <label class="icon-label"><span class="glyphicon glyphicon-star"></span></label> </div> <div class="data-write"> <input placeholder="Hermosillo"> <label class="icon-label"><span class="glyphicon glyphicon-star"></span></label> </div> <div class="data-write send"> <div class="btn-cont"> <button class="btn btn-green">Envíamelo</button> </div> </div> </form> </div> <button class="btn btn-red actionStep" data-show="1">Regresar al inicio</button> </div> </div> </div> </div> </div> </section> </div>';
		$component.append( data );
		initComparadorMobile();
	}

	function initComparadorDesktop(){

		var $content = $('.component-cp-prepa .elemento-componente-comparador');

	  	componentActions();

	  	// ESCONDER DE ENTRADA LOS ELEMENTOS DEL COMPARADOR
		$content.hide();

		function componentActions(){

			$('.component-cp-prepa .cont-select').on('change', 'select', function() {
				updateMobileOptions();

		 		if(validOptions()){
			 		gethtmlInfo($('#opcion-comparador1 select').val() , $('#opcion-comparador2 select').val());

			 		$content.show();

					hideAllB(steps);
					showStep(3);

			 	}
			 	else{
			 		$content.hide();
			 	}


			});
		}
	}

	function initComparadorMobile(){

		var $elementUVM = $('.component-cp3 .incontent-cp3').clone();
		$('.por-que-uvm-slide .in-content').html($elementUVM);

		steps = $('#component-cpm-prepa .step');
		componentActions();
		updateMobileOptions();
		initSlider('#component-cpm-prepa');

		hideAllB(steps);
		showStep(0);

		function componentActions(){

			$('#component-cpm-prepa').on( "click", '.actionStep', function(e) {

				var show = $(this).data('show')-1;
				var hide = $(this).parent().parent('.step').index();
				hideStep(hide);
				showStep(show);
			});

			$('#component-cpm-prepa .line-carrer, #component-cpm-prepa .pick-carrer').on( "click", '>li', function(e) {
				e.preventDefault();
				$($(this).data('selector') + ' select').val($(this).data('value')).change();

				addActiveClass($(this));

				var hide = $(this).data('step');
				var show = hide+1;
				hideStep(hide);
				showStep(show);
				// beginSlide(0);
			});

			$('.step').on( 'click' , '.beginSlide', function(){
				beginSlide(0);
			});
		}
	}


	function validOptionsPlanes(){
		var $selects = $('.component-cp-prepa .component-cp1 .final-select select');
		var valid = true;

		planesId = [];

		$selects.each(function(i, e) {
			planesId.push($(e).val());
			if($(e).val()=='' || $(e).val()== 0){
				valid = false;
				return;
			}
		});

		return valid;
	}

	function validOptions(){
		var selects = ['#opcion-comparador1', '#opcion-comparador2'];
		var valid = true;
		selects.forEach(function(selector) {

			if($(selector + ' select').val()=='' || $(selector + ' select').val()== 0){
				valid = false;
				return;
			}
		});

		return valid;
	}

	function gethtmlInfo(opc1, opc2){
		var $container = $('.component-cp-prepa .elemento-componente-comparador .component-cp1');
		var source = $container.data('source');
		var licenciaturas =[opc1, opc2];
		var innerContainers = [''];
		var meta = {};
		$.each( licenciaturas, function( key, val ) {
			//console.log(source);
			$.getJSON( source , {
		    id: val
		  },function( data ) {

			meta = data;


			}).always(function() {
				//console.log(meta);

				var $main = $('.component-cp1 .content-cp').eq(key);
				var $main2 = $('.component-cp2 .content-cp').eq(key);

				//console.log($main);
				var $mainmobile1 = $('.step-4 .one .divided-c .halff').eq(key);
				var $mainDuracionMobile = $('.step-4 .two .divided-c .halff').eq(key);
				var $mainmobile3 = $('.step-4 .three .divided-c .halff').eq(key);
				var $mainVideoMobile = $('.step-4 .video-slide .divided-c .halff').eq(key);

				$main.children('.cont-img').html('<img src="'+meta.thumb+'"/>');
				$main.children('.mode-description').html(meta.descripcion);
				$main.children('.duracion').html('<p><strong>Duración</strong></p>');

				$main.find('.video-container .cont-iframe').html('<iframe class="video" data-tipo="general" src="'+meta.video.video+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>');
				$main.find('.description-iframe .tittle-i').html(meta.video.titulo);
				$main.find('.description-iframe .subtittle-i').html(meta.video.subtitulo);
				$main.find('.description-iframe .date-i').html(meta.video.extra);
				$main.find('.excerpt p').html(meta.extra);

				$main.find('.materias-url a').prop('href', meta.url.materia);
				$main.find('.calendario-url a').prop('href', meta.url.calendario);


				$mainDuracionMobile.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainDuracionMobile.children('.duracion').html('<p><strong>Duración</strong></p>');

				$mainDuracionMobile.find('.materias-url a').prop('href', meta.url.materia);
				$mainDuracionMobile.find('.calendario-url a').prop('href', meta.url.calendario);
				$mainDuracionMobile.find('.excerpt p').html(meta.extra);

				$mainVideoMobile.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainVideoMobile.find('.iframe-sec').html('<iframe class="video" data-tipo="general" src="'+meta.video.video+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>');
				$mainVideoMobile.find('.description-iframe .tittle-i').html(meta.video.titulo);
				$mainVideoMobile.find('.description-iframe .subtittle-i').html(meta.video.subtitulo);
				$mainVideoMobile.find('.description-iframe .date-i').html(meta.video.extra);
				$mainVideoMobile.find('.t-descripcion').html(meta.descripcion);

				$.each(meta.duracion, function(key1, duracion){
					$main.children('.duracion').append('<p>'+duracion.titulo+' '+ duracion.duracion +'</p>');
					$mainDuracionMobile.children('.duracion').append('<p>'+duracion.titulo+' '+ duracion.duracion +'</p>');
				});

				var $campusContainer = $main2.find('.campus-container');
				var $campusContainerM = $('.step-4 .campus-slide .divided-c .halff').eq(key).find('.campus-container');

				$campusContainer.html('');
				$campusContainerM. html('');

				$.each(meta.campus, function(key, campus){

					var campusHTML = '<div class="col-sm-6">';
					campusHTML+='<ul>';
					campusHTML+='<li class="tittle"><p>'+ campus.titulo+ '</p></li>';

					$.each(campus.campus, function(key, sede){

						campusHTML+='<li><a href="'+sede.liga+'">'+ sede.titulo+ '</a></li>';

					});

					campusHTML+='</ul>';
					campusHTML+='</div>';


					$campusContainer.append(campusHTML);
					$campusContainerM.append(campusHTML);
				});

				var $colegiaturaContainer = $main2.find('.colegiatura-container');
	            var $colegiaturaContainerM = $('.step-4 .colegiatura-slide .divided-c .halff').eq(key).find('.colegiatura-container');

	            $colegiaturaContainer.find('.lite strong').html(meta.colegiatura.monto);
	            $colegiaturaContainerM.find('.lite strong').html(meta.colegiatura.monto);

	            var $ligaColegiatura = $main2.find('.links-container .calcular');
				$ligaColegiatura.html($ligaColegiatura.data('title'));
				$ligaColegiatura.prop('href', meta.colegiatura.colegiatura);

				var $ligaPrograma = $main2.find('.links-container .programa');
				$ligaPrograma.html($ligaPrograma.data('title'));
				$ligaPrograma.prop('href', meta.colegiatura.programa);

				$mainmobile3.children('.title').html('<strong>'+meta.titulo+'<strong>');

				sliderMobile.update();

			});
		});
	}


  	function appendSlidesPuntos(count){

		$('.step-6 .swiper-slide.punto').remove();

		var $slider = $('.step-6 .swiper-container .swiper-slide.two');
		var slideP = '<div class="swiper-slide punto">';
		slideP+='<div class="in-content">';
		slideP+='<div class="divided-c">';
		slideP+='<div class="halff">';
		slideP+='<p class="title"></p>';
		slideP+='<div class="cont-points-container">';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='<div class="halff">';
		slideP+='<p class="title"></p>';
		slideP+='<div class="cont-points-container">';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='</div>';

		//var slides = slideP.repeat(count);
		var slides = repeatString(slideP,count);
		$(slides).insertAfter($slider);

		sliderMobile.update();
	}

	function repeatString(string, times){
		var text = '';

		for (var i = 0; i < times; i++) {
		    text += string;
		}

		return text;
	}

	function addActiveClass(element){
		element.addClass('active').siblings().removeClass('active');
	}


	function initSlider(selector){

  		sliderMobile = new Swiper(selector +' .step .swiper-container', {
	        pagination: selector + ' .swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
        	autoHeight : true
	    });

  	}

  	function beginSlide(index){
  		sliderMobile.slideTo(index);
  	}

  	function showStep(index){
		var element = steps.eq(index);
		showCurrentContent(element, false);
	}

	function hideStep(index){
		var element = steps.eq(index);
		element.hide();
	}
  }

function initComparadorGeneral(){

	var sliderMobile = null;
	var planesId = [];
	var steps = $('#component-cpm .step');
	initComparador();


	function initComparador(){
		var $component = $('#component-comparador');

  		if($component.length>0){

  			isComparador = true;
  			initComparadorDesktop();
  			setTimeout(function(){
  				appendMobileComparador();
  			 }, 1000);

  		}
	}

	function appendMobileComparador(){
		var $component = $('#component-comparador');

		// PARA CUANDO LO JALA DEL TEMPLATE
		// $.get( "../../templates/comparador-mobile.html", function( data ) {
		//   	$component.append( data );
		//   	initComparadorMobile();
		// });

		//var data='<div class="container visible-block-xs hidden-sm hidden-md hidden-lg" id="component-cpm"> <section class="block-uvm"> <div class="component-wrapper"> <div class="row component-cpm"> <div class="step step-1" data-step="1"> <div class="in-content"> <div class="limit-content"> <p class="inst">Para poder tener una decisión más acertada te ofrecemos comparar entre distintas carreras. Solo tienes que seguir estos sencillos pasos:</p> <ol> <li>Primero selecciona una vertical</li> <li>Después una carrera de esa vertical</li> <li>Ahora selecciona la vertical que quieres comparar</li> <li>Selecciona ahora una carrera de esta vertical y compara</li> </ol> <button class="btn btn-red actionStep" data-show="2">Empieza</button> </div> </div> </div> <div class="step step-2" data-step="2"> <!-- Paso 2 --> <div class="btn-cont"> <button class="btn btn-special actionStep" data-show="1"> Regresar a Instrucciones </button> </div> <div class="heading-programs"> <h2>Vertical 1</h2> </div> <div class="in-content"> <div class="limit-content"> <p class="inst">Pimero selecciona una vertical</p> <ul class="line-carrer"> </ul> </div> </div> </div> <div class="step step-3" data-step="3"> <!-- Paso 3 --> <div class="btn-cont"> <button class="btn btn-special actionStep" data-show="2"> Regresar a Vertical 1 </button> </div> <div class="heading-programs"> <h2>Carrera 1</h2> </div> <div class="in-content"> <div class="limit-content"> <p class="inst">Despúes una carrera de esa vertical</p> <ul class="pick-carrer"> </ul> </div> </div> </div> <div class="step step-4" data-step="4"> <!-- Paso 4 --> <div class="btn-cont"> <button class="btn btn-special actionStep" data-show="3"> Regresar a Carrera 1 </button> </div> <div class="heading-programs"> <h2>Vertical 2</h2> </div> <div class="in-content"> <div class="limit-content"> <p class="inst">Pimero selecciona una vertical</p> <ul class="line-carrer"> </ul> </div> </div> </div> <div class="step step-5" data-step="5"> <!-- Paso 5 --> <div class="btn-cont"> <button class="btn btn-special actionStep" data-show="4"> Regresar a Vertical 2 </button> </div> <div class="heading-programs"> <h2>Carrera 2</h2> </div> <div class="in-content"> <div class="limit-content"> <p class="inst">Despúes una carrera de esa vertical</p> <ul class="pick-carrer"> </ul> </div> </div> </div> <div class="step step-6" data-step="6"> <div class="swiper-button-next glyphicon glyphicon-chevron-right"></div> <div class="swiper-button-prev glyphicon glyphicon-chevron-left"></div> <div class="swiper-container"> <div class="btn-cont"> <button class="btn btn-special actionStep" data-show="5"> Regresar a elegir </button> </div> <div class="heading-programs swiper-pagination"></div> <div class="swiper-wrapper"> <div class="swiper-slide one"> <!-- Paso 6 --> <div class="in-content"> <div class="divided-c"> <div class="halff"> <p class="title"></p> <p class="t-center t-descripcion"></p> </div> <div class="halff"> <p class="title"></p> <p class="t-center t-descripcion"></p> </div> </div> </div> </div> <div class="swiper-slide video-slide"> <div class="in-content"> <div class="divided-c"> <div class="halff"> <p class="title"></p> <div class="row component-c14"> <div class="col-sm-4"> <div class="iframe"> <div class="iframe-sec cont-iframe"> </div> <div class="description-iframe"> <p>Escucha la experiencia de:</p> <p class="tittle-i"></p> <p class="subtittle-i"></p> <p class="date-i"></p> </div> </div> </div> </div> </div> <div class="halff"> <p class="title"></p> <div class="row component-c14"> <div class="col-sm-4"> <div class="iframe"> <div class="iframe-sec cont-iframe"> </div> <div class="description-iframe"> <p>Escucha la experiencia de:</p> <p class="tittle-i"></p> <p class="subtittle-i"></p> <p class="date-i"></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class="swiper-slide two"> <!-- Paso 7 --> <div class="in-content"> <div class="divided-c"> <div class="halff"> <p class="title"></p> <div class="duracion"></div> <div class="clearfix"> <div class="data-write select-field" data-key="0"></div> </div> </div> <div class="halff"> <p class="title"></p> <div class="duracion"></div> <div class="clearfix"> <div class="data-write select-field" data-key="1"></div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="step step-7" data-step="7"> <!-- Paso 4 --> <div class="btn-cont"> <button class="btn btn-special beginSlide actionStep" data-show="6"> Regresar a comparar </button> </div> <div class="in-content"> <div class="limit-content"> <span class="big-red">¿Quieres saber más?</span> <p class="inst">Recibe por correo el comparativo completo con costos y opciones de financiamiento.</p> <div class="form-gray-bg"> <form> <div class="data-write"> <input placeholder="Juán Fernández"> <label class="icon-label"><span class="glyphicon glyphicon-star"></span></label> </div> <div class="data-write"> <input placeholder="04455 3471 0988"> <label class="icon-label"><span class="glyphicon glyphicon-star"></span></label> </div> <div class="data-write"> <input placeholder="juan@correo.com"> <label class="icon-label"><span class="glyphicon glyphicon-star"></span></label> </div> <div class="data-write"> <input placeholder="Hermosillo"> <label class="icon-label"><span class="glyphicon glyphicon-star"></span></label> </div> <div class="data-write send"> <div class="btn-cont"> <button class="btn btn-green">Envíamelo</button> </div> </div> </form> </div> <button class="btn btn-red actionStep" data-show="1">Regresar al inicio</button> </div> </div> </div> </div> </div> </section> </div>';
		$component.append( data );
		initComparadorMobile();
	}

	function initComparadorDesktop(){
		var $content = $('.component-cp .cont-information');
	  	var $content1 = $('.component-cp .cont-information .component-cp1');
	  	var $content2 = $('.component-cp .cont-information .component-cp-info');
	  	var $content3 = $('.cuestionario-container');

	  	componentActions();

		$content.hide();
		$content1.hide();
		$content2.hide();
		$content3.hide();

		function componentActions(){

			$('.component-cp .cont-select').on('change', 'select', function() {
				updateMobileOptions();

		 		if(validOptions()){
			 		gethtmlInfo($('#licenciatura1 select').val() , $('#licenciatura2 select').val());

			 		$content.show();
			 		$content1.show();

					hideAllB(steps);
					showStep(5);

			 	}
			 	else{
			 		$content.hide();
			 		$content1.hide();
			 		$content2.hide();
			 		$content3.hide();
			 	}


			});


			$('.component-cp .component-cp1 .final-select').on('change', 'select', function() {

			 	if(validOptionsPlanes()){
			 		gethtmlInfo2(planesId[0] , planesId[1]);
			 		$content2.show();
			 		$content3.show();
			 	}
			 	else{
			 		$content2.hide();
			 		$content3.hide();
			 	}

			});
		}
	}

	function initComparadorMobile(){
		steps = $('#component-cpm .step');
		componentActions();
		updateMobileOptions();
		initSlider('#component-cpm');

		hideAllB(steps);
		showStep(0);

		function componentActions(){

			$('#component-cpm').on( "click", '.actionStep', function(e) {

				var show = $(this).data('show')-1;
				var hide = $(this).parent().parent('.step').index();

				hideStep(hide);
				showStep(show);
			});

			$('.line-carrer, .pick-carrer').on( "click", '>li', function(e) {

				$($(this).data('selector') + ' select').val($(this).data('value')).change();

				addActiveClass($(this));

				var hide = $(this).data('step');
				var show = hide+1;

				hideStep(hide);
				showStep(show);
				// beginSlide(0);
			});

			$('.line-carrer, .pick-carrer').on( "click", '>li a', function(e) {
				e.preventDefault();
			});

			$('.step').on( 'click' , '.beginSlide', function(){
				beginSlide(0);
			});

			$('.swiper-slide.two .select-field').on('change', 'select', function() {

				$('.component-cp .component-cp1 .final-select select').eq($(this).parent().data('key')).val($(this).val()).change();

			});
		}
	}


	function validOptionsPlanes(){
		var $selects = $('.component-cp .component-cp1 .final-select select');
		var valid = true;

		planesId = [];

		$selects.each(function(i, e) {
			planesId.push($(e).val());
			if($(e).val()=='' || $(e).val()== 0){
				valid = false;
				return;
			}
		});

		return valid;
	}

	function validOptions(){
		var selects = ['#vertical1', '#licenciatura1', '#vertical2', '#licenciatura2'];
		var valid = true;
		selects.forEach(function(selector) {

			if($(selector + ' select').val()=='' || $(selector + ' select').val()== 0){
				valid = false;
				return;
			}
		});

		return valid;
	}

	function gethtmlInfo(lid1, lid2){
		var $container = $('.component-cp .cont-information .component-cp1');
		var source = $container.data('source');
		var licenciaturas =[lid1, lid2];
		var innerContainers = [''];
		var meta = {};
		$.each( licenciaturas, function( key, val ) {

			$.getJSON( source , {
		    id: val
		  },function( data ) {

			meta = data;


			}).always(function() {

				var $main = $('.component-cp1 .content-cp').eq(key);

				var $mainmobile1 = $('.step-6 .one .divided-c .halff').eq(key);
				var $mainmobile2 = $('.step-6 .two .divided-c .halff').eq(key);
				var $mainmobile3 = $('.step-6 .three .divided-c .halff').eq(key);
				var $mainmobile4 = $('.step-6 .video-slide .divided-c .halff').eq(key);

				$main.children('.cont-img').html('<img src="'+meta.thumb+'"/>');
				$main.children('.mode-description').html(meta.descripcion);
				$main.children('.duracion').html('<p><strong>Duración</strong></p>');

				$mainmobile1.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainmobile1.children('.t-descripcion').html(meta.descripcion);

				$mainmobile2.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainmobile2.children('.duracion').html('<p><strong>Duración</strong></p>');

				$mainmobile4.children('.title').html('<strong>'+meta.titulo+'<strong>');
				$mainmobile4.find('.iframe-sec').html('<iframe class="video" data-tipo="general" src="'+meta.video.video+'?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>');
				$mainmobile4.find('.description-iframe .tittle-i').html(meta.video.titulo);
				$mainmobile4.find('.description-iframe .subtittle-i').html(meta.video.subtitulo);
				$mainmobile4.find('.description-iframe .date-i').html(meta.video.extra);

				$.each(meta.duracion, function(key1, duracion){
					$main.children('.duracion').append('<p>'+duracion.titulo+' '+ duracion.duracion +'</p>');
					$mainmobile2.children('.duracion').append('<p>'+duracion.titulo+' '+ duracion.duracion +'</p>');

				});

				var options = [];

				$.each(meta.planes, function(key3, plan){
					options.push('<option value="'+plan.id+'">'+plan.titulo+'</option>')
				});

				$main.find('.final-select').html('<select name="plan-de-estudios" class="swiper-no-swiping"><option value="0">Elige una el plan de estudios</option>'+options.join("")+'</select>');
				$mainmobile2.find('.select-field').html('<select name="plan-de-estudios-m" class="swiper-no-swiping"><option value="0">Elige una el plan de estudios</option>'+options.join("")+'</select>');

				$mainmobile3.children('.title').html('<strong>'+meta.titulo+'<strong>');

				sliderMobile.update();

			});
		});
	}

	function gethtmlInfo2(pid1, pid2){

			var $container = $('.component-cp .cont-information .component-cp-info');
			var source = $container.data('source');
			var planes =[pid1, pid2];
			var meta = {};

			appendSlidesExtra();

			$.each( planes, function( key, val ) {

				$.getJSON( source , {
			    id: val
			  },function( data ) {

				meta = data;

			}).always(function() {

				var $main = $('.component-cp-info >div .incontent-cp2 .content-cp').eq(key);
				var $main2 = $('.component-cp-info >div .incontent-cp3 .content-cp3').eq(key);
				var $mainmobile3 = $('.step-6 .three .divided-c .halff').eq(key);

				var $puntosContainer = $main.find('.cont-points-container');
				var $puntosContainerM = $mainmobile3.find('.cont-points-container');

				var $ligaContainer = $main.find('.discover-cp2 a');
				$ligaContainer.html($ligaContainer.data('title'));

				var $campusContainer = $main2.find('.campus-container');
				var $campusContainerM = $('.step-6 .campus-slide .divided-c .halff').eq(key).find('.campus-container');


				var $mainmobile3 = $('.step-6 .three .divided-c .halff').eq(key);

				if(key==0){
					appendSlidesPuntos(meta.puntos.length);
				}

				var $puntosM = $('.step-6 .swiper-slide.punto');
					$.each(meta.puntos, function(key1, punto){
					var puntoHTML = '<div class="col-sm-12 cont-points">';
					puntoHTML+='<h4>'+punto.titulo+'</h4>';
					puntoHTML+='<div class="col-sm-3">';
					puntoHTML+='<div class="icon-circle '+punto.color+'">';
					puntoHTML+='<span class="'+punto.thumb+'"></span>';
					puntoHTML+='</div>';
					puntoHTML+='</div>';
					puntoHTML+='<div class="col-sm-9">';
					puntoHTML+= '<p>'+punto.descripcion+'</p>';
					puntoHTML+='</div>';
					puntoHTML+='</div>';


					var $puntosContainerM = $($puntosM[key1]).find('.divided-c .halff').eq(key);

					if(key1==0){
						$puntosContainer.empty();
						$puntosContainerM.find('.cont-points-container').empty();
					}

					$puntosContainer.append(puntoHTML);
					$puntosContainerM.find('.cont-points-container').append(puntoHTML);

				});

				$ligaContainer.prop('href', meta.liga);

				$campusContainer.html('');
				$campusContainerM. html('');
				$.each(meta.campus, function(key, campus){


					var campusHTML = '<div class="col-sm-6">';
					campusHTML+='<ul>';
					campusHTML+='<li class="tittle"><p>'+ campus.titulo+ '</p></li>';

					$.each(campus.campus, function(key, sede){

						campusHTML+='<li><a href="'+sede.liga+'">'+ sede.titulo+ '</a></li>';

					});

					campusHTML+='</ul>';
					campusHTML+='</div>';


					$campusContainer.append(campusHTML);
					$campusContainerM.append(campusHTML);
				});


	            var $colegiaturaContainer = $main2.find('.colegiatura-container');
	            var $colegiaturaContainerM = $('.step-6 .colegiatura-slide .divided-c .halff').eq(key).find('.colegiatura-container');

	            $colegiaturaContainer.find('.lite strong').html(meta.colegiatura.monto);
	            $colegiaturaContainerM.find('.lite strong').html(meta.colegiatura.monto);

	            var $ligaColegiatura = $main2.find('.links-container .calcular');
				$ligaColegiatura.html($ligaColegiatura.data('title'));
				$ligaColegiatura.prop('href', meta.colegiatura.colegiatura);

				var $ligaPrograma = $main2.find('.links-container .programa');
				$ligaPrograma.html($ligaPrograma.data('title'));
				$ligaPrograma.prop('href', meta.colegiatura.programa);


				var $ligaColegiaturaM = $colegiaturaContainerM.find('.links-container .calcular');
				$ligaColegiaturaM.html($ligaColegiaturaM.data('title'));
				$ligaColegiaturaM.prop('href', meta.colegiatura.colegiatura);

				var $ligaProgramaM = $colegiaturaContainerM.find('.links-container .programa');
				$ligaProgramaM.html($ligaProgramaM.data('title'));
				$ligaProgramaM.prop('href', meta.colegiatura.programa);

			});
		});
	}

	function appendSlidesExtra(){
		var extra ='<div class="swiper-slide campus-slide"> <div class="in-content"> <div class="divided-c"> <div class="halff"> <p class="title"></p> <span class="big-red">¿Dónde podrás estudiarla?</span> <div class="row component-t3 campus-container"> </div> </div> <div class="halff"> <p class="title"></p> <span class="big-red">¿Dónde podrás estudiarla?</span> <div class="row component-t3 campus-container"> </div> </div> </div> </div> </div> <div class="swiper-slide colegiatura-slide"> <div class="in-content"> <div class="divided-c"> <div class="halff"> <p class="title"></p> <div class="colegiatura-container"> <strong>Colegiaturas desde:</strong> <p class="lite">$ <strong class="green"></strong> mensuales</p> </div> <div class="links-container"> <a href="#" data-title="CALCULAR COLEGIATURA" class="calcular"></a> <a href="#" data-title="IR A PÁGINA DEL PROGRAMA" class="programa"></a> </div> </div> <div class="halff"> <p class="title"></p> <div class="colegiatura-container"> <strong>Colegiaturas desde:</strong> <p class="lite">$ <strong class="green"></strong> mensuales</p> </div> <div class="links-container"> <a href="#" data-title="CALCULAR COLEGIATURA" class="calcular"></a> <a href="#" data-title="IR A PÁGINA DEL PROGRAMA" class="programa"></a> </div> </div> </div> <div class="btn-cont"> <button class="btn btn-red actionStep" data-show="7">Más información</button> </div> </div> </div>';
		$('.step-6 .swiper-slide.punto').remove();

		var $slider = $('.step-6 .swiper-container .swiper-slide.two');

		$(extra).insertAfter($slider);

		sliderMobile.update();
	}

  	function appendSlidesPuntos(count){

		$('.step-6 .swiper-slide.punto').remove();

		var $slider = $('.step-6 .swiper-container .swiper-slide.two');
		var slideP = '<div class="swiper-slide punto">';
		slideP+='<div class="in-content">';
		slideP+='<div class="divided-c">';
		slideP+='<div class="halff">';
		slideP+='<p class="title"></p>';
		slideP+='<div class="cont-points-container">';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='<div class="halff">';
		slideP+='<p class="title"></p>';
		slideP+='<div class="cont-points-container">';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='</div>';
		slideP+='</div>';

		// var slides = slideP.repeat(count);

		var slides = repeatString(slideP, count);

		$(slides).insertAfter($slider);

		sliderMobile.update();
	}

	function repeatString(string, times){
		var text = '';

		for (var i = 0; i < times; i++) {
		    text += string;
		}

		return text;
	}

	function addActiveClass(element){
		element.addClass('active').siblings().removeClass('active');
	}


	function initSlider(selector){

  		sliderMobile = new Swiper(selector +' .step .swiper-container', {
	        pagination: selector + ' .swiper-pagination',
	        paginationClickable: true,
	        nextButton: '.swiper-button-next',
        	prevButton: '.swiper-button-prev',
        	autoHeight : true
	    });

  	}

  	function beginSlide(index){
  		sliderMobile.slideTo(index);
  	}

  	function showStep(index){
		var element = steps.eq(index);
		showCurrentContent(element, false);
	}

	function hideStep(index){
		var element = steps.eq(index);
		element.hide();
	}
  }

	//Inicialización menú interactivo
	function initMenuInteractivo(){
		componentsMenuInteractivo.forEach(function(selector) {
			if ($(selector.selector).length > 0){
				mMenuInteractivo(selector);
			}
		});
	}

	//Componente menú interactivo
	function mMenuInteractivo(selector){

		var $contenedores = $(selector.selector + ' *[data-type="container"]');
		var enlaces = $contenedores.find('.options-container a');
		var contenidos = $contenedores.find('.options-container');


		//html boton regresar
		var $boton_regresar = '<a href="#regresar" class="btn-return"><span class="icon i-arrow-left"></span><p>Regresar</p></a>';

		//Insertar el boton regresar a los contenedores a excepción del primero
		$contenedores.each(function(index,value){
			if (index != 0){
				$(this).prepend($boton_regresar);
			}
		});

		$(contenidos).hide(); // Esconder contenedores al inicializar

		init(); //Inicialización para mostrar el primer contenedor


		//Adición del click regresar
		$contenedores.on( "click", '>a.btn-return' , function(e) {
			e.preventDefault();
			$contenedores.removeClass('active');
			var index = $(this).parent().index() - 1;
			$contenedores.eq(index).addClass('active');

		});

		//Adición del click
		$contenedores.find('.options-container').on( "click", 'a' , function(e) {

			if( $(this).data('action')){
				e.preventDefault();
			}

			var destino = $(this).data('action');

			//Si tiene el atributo accion y existe el contenedor, se añade clase active y se ejecuta la función de selectOption
			if (destino && isMenu(destino)){
				addClassActive($(this));
				selectOption(destino);
			}

		});

		//Función de inicialización
		function init(){
			selectOption('initial');
		}

		//Función para conocer si un menú existe en el dom
		function isMenu(destiny){
			return ($(selector.selector + ' *[data-id="' + destiny +'"]').length > 0);
		}

		//Función de selección
		function selectOption(destiny_id, container_origin){

			$contenedor = $contenedores.removeClass('active').find('*[data-id="' + destiny_id +'"]');

			var index =$contenedor.parents('[data-type="container"]').index(); //Index del contenedor padre

			$contenedores.eq(index).addClass('active').find('.options-container').hide();

			$contenedor.show();
			newSelection(index);
		}

		//Función para una nueva selección, borrar estado de activo y ocultar menús posteriores
		function newSelection(index){
			for (var i = 0; i < $contenedores.length; i++) {

				//Remover estado activo en mismo nivel o mayor
				if(i >= index){
					removeClassActive($contenedores.eq(i).find('.active'));
				}

				//Ocultar contenedor en nivel mayor y remover clase activa
				if(i > index){
					removeClassActive($contenedores.eq(i))
					$contenedores.eq(i).find('.options-container').hide();
				}

			}
		}

		function addClassActive(element){
			element.addClass('active').siblings().removeClass('active');
		}

		function removeClassActive(element){
			element.removeClass('active');
		}

	}


	//Inicialización componentes de pestaña
  	function initComponentPestana() {

  		componentsPestana.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			mComponentPestana(selector);
	  		}
  		});

	}

	//Componentes pestaña
	function mComponentPestana(selector) {

		var $component = $(selector.selector);
		var botonesContainer = $(selector.selector + ' .buttons-zone, ' + selector.selector + ' .tab-zone');
		var tabs = $(selector.selector + ' .tab-zone >div');

		appendMenuElements();
		hideAllB(tabs);

		init(); //Inicializar función

		//Adición del click
		botonesContainer.on( "click", selector.active , function(e) {
			e.preventDefault();

			action($(this), true);
		});

		// Función para incializar el primer tab
		function init(){
			action($(selector.selector + ' .buttons-zone ' + selector.active ).first(), false);
		}

		// Acción del boton, @elemento : elemento disparador, @scroll si se deberá scrollear
		function action(element, scroll){

			if(element.parent().hasClass('buttons-zone')){
				var index = $(selector.selector + ' .buttons-zone ' + selector.active ).index(element);
				var b = $( selector.selector + ' .tab-zone >a, '+selector.selector + ' .tab-zone >div.cont-button' );
			}
			else{
				var index = $(selector.selector + ' .tab-zone '+ selector.active ).index(element);
				var b = $(selector.selector + ' .buttons-zone >a, ' +selector.selector + ' .buttons-zone >div.cont-button');
			}

			addActiveClass(element);
			addActiveClass(b.eq(index));

			var active_element = tabs.eq(index);

			showCurrentContent(active_element, false);

			// Scroll a elemento?
			if (scroll){
				scrollToElement(element);
			}
		}


		function addActiveClass(element){
			element.addClass('active').siblings().removeClass('active');
		}


		function appendMenuElements(){

	  		var $menuElements = $(selector.selector + ' .buttons-zone' + selector.active);
	  		var active = false;
	  		$menuElements.each(function(i, e) {
	  			var $element = $(e).clone();
	  			$(e).addClass('hidden-xs');
				var tab = tabs.eq(i);

				$element.insertBefore(tab).addClass('hidden-md hidden-lg hidden-sm visible-xs-block');

				if(i==0){
					$(selector.selector + ' .tab-zone >div.cont-button').eq(0);
				}
			});


	  	}

	}

  	function initComponentCerrar() {

  		componentsCerrar.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			mComponentCerrar(selector);
	  		}
  		});

	}

	function mComponentCerrar(selector){

		var $component = $(selector.selector);
		var $elementToHide = $(selector.selector + selector.active );

		closeElement($component, $elementToHide);

	}

	function initComponentsSelectorPopUp(){

  		componentsPopUp.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
	  			mComponentSelectorPopUp(selector);
	  		}
  		});
  	}

  	function mComponentSelectorPopUp(selector) {

	    mComponentCerrar(selector);


	    function mComponentCerrar(selector){

			var $component = $(selector.selector);
			var $elementToHide = $(selector.selector + selector.active );

			closeElement($component, $elementToHide, $component);
		}

		function closeElement(component, elementToHide, elementRemoveClass){
			component.on( "click", ".close", function() {
			  elementToHide.hide();

			  	if(typeof elementRemoveClass != 'undefined'){
					//elementRemoveClass.removeClass('active');
					removerClase(elementRemoveClass, 'active');
				}

				//Buscar elemento que lo activo para removerle la clase
				var $parent_active = elementRemoveClass.parent().find('.active');

				if ($parent_active.length > 0)
				{
					removerClase($parent_active, 'active');
				}
			});

		}


	}

  	function initMobileComponentsSelectorPop(){

  		mobileComponentsSelectorPop.forEach(function(selector) {
  			if ($(selector.selector).length > 0){
  				$(selector.selector).each(function(index){
  					mComponentSelectorPop(selector, index);
  				})

	  		}
  		});
  	}

  	function mComponentSelectorPop(selector, index) {

	    var $component = $(selector.selector).eq(index);
	    var botonesContainer = $component.find(' .buttons-zone');

	    if(botonesContainer.length>1)
	    	botonesContainer = $(botonesContainer[0]);

	  	var $elementToHideParent = (typeof selector.innerContent == "undefined") ? $component.find('>.cont-expanded') : $component.find('>.buttons-zone .cont-expanded');


	    if($elementToHideParent.length>1 && typeof selector.innerContent == "undefined")
	    	$elementToHideParent = $($elementToHideParent[0]);

	    var tabs = (typeof selector.innerContent == "undefined") ? $elementToHideParent.find('>.expanded-link') : $elementToHideParent.find('.expanded-link');
	    // console.log(tabs);
	    // var tabs = (typeof selector.innerContent == "undefined" && selector.innerContent) ? $component.find(' .cont-expanded .expanded-link') : $elementToHideParent.find('>.expanded-link');


	    var all_tabs = $component.find(' .cont-expanded .expanded-link');

	    var $elementToHide = $elementToHideParent.find('.expanded-link');

	    var botones = $component.find(' .buttons-zone ' + selector.active);

	    hideAllB(all_tabs);

	    if(selector.showFirst){
	    	showFirst();
	    }

	    botonesContainer.on( "click", selector.active, function(e) {
	    	e.preventDefault();

		 	var index = botones.index($(this));

		 	// ESCONDER A CUALQUIER ELEMENTO "HERMANO" ANTES DE ABRIRLO
		 	$elementToHide.hide();

		 	addActiveClass($(this));
		 	var element = tabs.eq(index);

		 	updateSliders(element); //Actualización de sliders

		 	if(!selector.showFirst){
		 		popClass(element.parent(), (selector.parentPopClass) ? selector.selector : false);
		 	}

		 	// Si hay propiedad scrollToButtonsArea, a showCurrentContent se le manda el tercer parametro del contenedor de botones
		 	if(selector.scrollToButtonsArea){
				showCurrentContent(element, true, botonesContainer);
		 	}
		 	// Si hay propiedad scrollToActiveButton se manda tercer parametro con el elemento del boton
		 	else if(selector.scrollToActiveButton){
		 		var active_button = botonesContainer.find('.active button');
		 		showCurrentContent(element, true, active_button);
		 	}
		 	else if(selector.scrollToSection){
		 		var active_section = botonesContainer.closest('section');
		 		showCurrentContent(element, true, active_section);
		 	}
		 	else if(selector.scrollToSpecificArea){
		 		var active_element = botonesContainer.find(selector.scrollToSpecificArea);
		 		showCurrentContent(element, true, active_element);
		 	}
		 	else {
		 		showCurrentContent(element);
		 	}
		});

		closeElement($component, $elementToHide, $elementToHideParent, (selector.parentPopClass) ? selector.selector : false);

		//Función para actualizar Sliders en el elemento
		function updateSliders(element){

			sliders_inside = element.find('.swiper-container');
			//console.log(sliders_inside.length);
			//Ciclo para cada slider
			for (var i = 0; i < sliders_inside.length; i++) {
				var i_slider = $(sliders_inside[i]).data('slider-id');
				//console.log(i_slider);
				// Si se tiene el indice del slider y ese indice existe en el arreglo de sliders, se posiciona en 0 y con diferenciacion de tiempo se ejecuta una actualización del slider
				if (i_slider && sliders[i_slider]){
					sliders[i_slider].slideTo(0);
					setTimeout(sliders[i_slider].update, 400);

					/*setTimeout((function(i){
						console.log('A', i)
						sliders[i].update();
					})(i_slider), 101);*/
				}
			}
		}


		function addActiveClass(element){
			botones.removeClass('active');
			element.addClass('active');
		}

		function showFirst(){

			var element = $(selector.selector).eq(index).find(' .buttons-zone '+selector.active).eq(0);
			addActiveClass(element);

			var element = tabs.eq(0);
			showCurrentContent(element, false);

		}

  }

	function mComponentC48() {

		var componentC48 = $('.component-c48');
		var botonesContainer = $('.component-c48 .buttons-zone');
		var tabs = $('.component-c48 .cont-expanded >div');
		var botones = $('.component-c48 .buttons-zone a');

		hideAllB(tabs);

		botonesContainer.on( "click", ">div", function(e) {
			e.preventDefault();
		 	var index = $('.component-c48 .buttons-zone >div').index(this);
		 	addActiveClass($(this));

		 	var element = tabs.eq(index);
		 	showCurrentContent(element);
		});

		function addActiveClass(element){
			botones.removeClass('active');
			element.children('a').addClass('active');
		}

  }


  function scrollMenu(){
  	var initialPosition;
  	var initialHeight;

   	var menuComponentItems = [
  		{ selector : '.component-m2'},
  		{ selector : 'nav.nav-section'}
  	];

  	if($('.component-m2').length > 0){
  		var menuComponentItems = [
	  		{ selector : '.component-m2'}
	  	];
  	}


  	menuComponentItems.forEach(function(selector) {
		if ($(selector.selector).length > 0){

			$(selector.selector).each(function(index){
				scrollMenuComponent($(this), index);
			})

		}
	});

  	function scrollMenuComponent($selector, i){


  		//
  		var initialPosition = $selector.offset();
  	 		//initialPosition.top -= $('.component-m2').height();
  	 		initialHeight = $selector.height();

  	 	var $inExtended = $selector.parent().closest('.expanded-link');

  	 	//console.log($selector);

  		if($inExtended.length>0)
  			initialPosition.top = initialPosition.top + $inExtended.height();

		$(window).scroll(function(){
			///Yahir: genera conflicto con la opción de menú
			//Guillermo: nunca debió comentarse esta línea, necesaria para el funcionamiento del M2
			if ($(this).scrollTop() > initialPosition.top){

				$selector.addClass('fixed-element')
			}
			else{
				$selector.removeClass('fixed-element')
			}

			if(!$('body').hasClass('fixed-scroll')){
				setCurrentElement();
			}
		});
  	}




  }

  function setCurrentElement(){

  	var current_id = null;

  	$('.fixed-menu-section').each(function(){
	    if (
	       $(this).offset().top < window.pageYOffset
	    && $(this).offset().top + $(this).height() > window.pageYOffset
	    ) {
	        //window.location.hash = $(this).attr('id');

	    	current_id = $(this).attr('id');

	    	if(window.location.hash != '#' + current_id)
		    	setHash('#' + current_id);
	    }
	});

  	var hash = current_id;
  	//window.location.hash.replace('#', '');

  	$('.component-m2 ul li a').removeClass('active');
    $('.menu-a-'+hash).addClass('active');

  }

  function mComponentM2(){

  	var $componentM2 = $('.component-m2');

  	if($componentM2.length>0){
  		appendMenuBlankSpace($componentM2);
  		appendMenuElements();
  		openElement();
  	}

  	function appendMenuBlankSpace(){
  		var html_space = '<div class="m2-fixed-space hidden-xs"></div>';
  		$(html_space).insertAfter('.component-m2');
  	}

  	function appendMenuElements(){

  		var $menuElements = $('.component-m2 ul li');

  		$menuElements.each(function(i, e) {
  			var $element = $(e);
  			var $section = $($element.data("container"));
  			var insert = '<a href="'+$element.data("container")+'" class="menu-a-'+$element.data("container").replace('#', '')+'">'+$element.data("title")+'</a>';
			$element.append(insert);
			$('<div class="fixed-menu-a header-title hidden-sm visible-xs-block hidden-md" data-container="'+$element.data("container")+'">'+insert+'</div>').insertBefore($section);
			$section.addClass('fixed-menu-section');
		});
  	}

  	function openElement(){

  		$(".fixed-menu-a").on("click", "a", function(e) {
  			e.preventDefault(); //Evitamos que el anchor haga el brinco al div

			var id_element = $(this).parent().data('container');
			var $element = $(id_element);

			hideOthers(id_element);

			$element.toggleClass('active');
			addActiveClass($(this).parent());

			//Si tiene la clase active hacemos scroll;
			if($(this).parent().hasClass('active')){
				goToElement($(this));
			}

			setHash($(this).attr('href')); //Seteamos el anchor en la url
		});

		$(".component-m2 ul li").on("click", "a", function(e) {
  			e.preventDefault(); //Evitamos que el anchor haga el brinco al div
  			$('body').addClass('fixed-scroll');
  			$('.component-m2 ul li a').removeClass('active');

  			$(this).toggleClass('active');
			var hash = $(this).parent().data('container');
			var $element = $(hash);
			goToElement($element);

			setHash(hash); //Seteamos el anchor en la url
		});

  	}

  	function goToElement($element){
  		scrollToElement($element);
  	}

  	function hideOthers(id_element){
		$('.fixed-menu-section').not(id_element).each(function(){
			$(this).removeClass('active')
				.prev('.fixed-menu-a').removeClass('active');
		});
  	}


  	function addActiveClass(element){
		element.toggleClass('active');
	}

  }

  	//Función para setear un hash en el history sin afectar la url (evitar brincos)
  	function setHash(link){
  		var hashlink = link.split('#');

  		//De tener habilitado history en nuestro navegador y el enlace contener un #, se declará un nuevo estado en el history con la url para evitar un brinco al contenedor
  		if (history && history.pushState && hashlink.length > 1)
  		{
  			history.pushState({}, '', link);
  		}
  	}

 	//Función para devolver el calculo de dimensiones para los videos
	function calcularDimensionesVideo(ancho, tipo){

		var dimensionesBase  = {
				header: {
					ancho: 1280,
					alto: 440
				},

				general: {
					ancho: 548,
					alto: 245
				}
			},

			tipoSeleccionado = (dimensionesBase[tipo]) ? dimensionesBase[tipo] : dimensionesBase.general,

			dimensiones = {
				ancho: ancho,
				alto: Math.floor((ancho*tipoSeleccionado.alto) / tipoSeleccionado.ancho)
			};

		return dimensiones;

	}

	function initVideos(){
		iframeVideos();
	}

	function initVideosYT(){
		customSettingsVideos();
	}

	//Función para vídeos con parametros especificos
	function customSettingsVideos(){
		var videos = [];

		if ($('.component-i1d').length > 0){

			$('.component-i1d').each(function(index){
				var video_container_id = 'yt-video-' + index;
					$video_container = $(this).find('.back-img-cont');
					$video_container.append('<div id="' + video_container_id +'"></div>');
					propierties = {
						videoId: $video_container.data('video-id'),
						mute: $video_container.data('mute'),
						autoplay : $video_container.data('autoplay'),
						controls : $video_container.data('controls'),
					};

				if(propierties.videoId){
					videos.push({container: video_container_id, propierties: propierties})
				}

			});

			if (videos.length > 0)
				initYtVideos(videos);

		}
	}

	function initYtVideos(videos){

		for (var i = 0; i < videos.length; i++) {
			var player;
			var done = false;
			player = new YT.Player(videos[i].container, {
			  height: '424',
			  width: '754',
			  videoId: videos[i].propierties.videoId,
			  playerVars: { 'autoplay': (videos[i].propierties.autoplay) ? 1 : 0, 'controls': (videos[i].propierties.c) ? 1 : 0, showinfo : 0, rel: 0 },
			  events: {
			    'onReady': function(event){
			    	event.target.mute();
			    }/*,
			    'onStateChange': function(event){
					if (event.data == YT.PlayerState.PLAYING && !done) {
					  setTimeout(function(){
					  	player.stopVideo();
					  }, 6000);
					  done = true;
					}
			    }*/
			  }
			});

			//if(videos[i].propierties.mute)
		}
		iframeVideos();
	}


	//Funciones para los iframe con clase video
	function iframeVideos(){
		if ($('iframe.video, .component-i1d iframe').length > 0){
			$('iframe.video, .component-i1d iframe').each(function(){

				var clase = ($(this).data('tipo')) ? $(this).data('tipo') : 'general',
					dimensiones = calcularDimensionesVideo($(this).width(), clase);

				if ($.isNumeric(dimensiones.alto)){
					$(this).height(dimensiones.alto);
				}
			});
		}
	}

	//Funciones para ejecutar en redimensión
	function resize(){
		$(window).resize(function(){
			iframeVideos();
			menusAction();
		});
	}

	//Función para preguntas freceuntes

	function initFAQ(){
		$('.component-pf .cont-inf ul> li > a').on('click',function(e){
	        e.preventDefault();
	        var activo = $(this).parent().hasClass('active');

	        if (activo){
	            $(this).parent().removeClass('active');
	        } else{
	            $(this).parent().addClass('active');
	        }

	    });
	}

	function fshowDependant(){
		var $dependant = $('.to-show-dependant');

		$dependant.each(function(i, e) {
			var $form = $( this );
			validateForm($form);
		});

		function validateForm($form){
			var $element = $form.closest('.expanded-link').find('.to-show-result');
			$element.hide();

			$form.validate({
			  rules: {
			  	categoria: {
			      required: true
			    },
			    campus: {
			      required: true
			    }
			  },
			  messages: {
			  	categoria: {
			       required: "Selecciona una categoria."
			    },
			  	email: {
			       campus: "Selecciona un campus."
			     }
			   },
			   	submitHandler: function(form) {
					var self = $(form).serialize();
					// Aquí enviar las opciones para que aparezca/llene el contenedor de abajo
					// $(form).closest('.expanded-link')
					$element.show();

				}
			});
		}
	}

	function finitAddThis(){

		$.ajax({
		  url: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-50183e323e87373a',
		  dataType: "script"
		}).
		fail(function(){
			throw new NuevoError("No se pudo cargar la API de AddThis, las funciones para compartir no estarán disponibles en la página.");
		});
	}


  return {
  	finitf3 : initf3,
  	fComponentMenu : mComponentMenu,
    finitComponentPestana : initComponentPestana,
    fComponentC29 : mComponentC29,
    fMobileMenu : menuMobile,
    fscrollMenu : scrollMenu,
    fcomponentM2 : mComponentM2,
    finitMobileComponentsSelectorPop : initMobileComponentsSelectorPop,
    finitComponentsSelectorPopUp : initComponentsSelectorPopUp,
    finitComponentCerrar : initComponentCerrar,
    finitComparadorGeneral : initComparadorGeneral,
    finitComparadorPreparatoria : initComparadorPreparatoria,
    finitSliderGeneral : initSliderGeneral,
    fComponentSlideDown : mComponentSlideDown,
    finitFormGeneral : initFormGeneral,
    finitLoadMore : initLoadMore,
    finitCalendario : initCalendario,
    fmenusAction : menusAction,
    finitVideos : initVideos,
    finitVideosYT : initVideosYT,
    finitResize : resize,
    finitSelectDependants : initSelectDependants,
    finitMenuM1 : initMenuM1,
    finitFAQ: initFAQ,
    finitMenuInteractivo : initMenuInteractivo,
    fexpandForm : initExpandForm,
    finitInyeccionPlantillas: finitInyeccionPlantillas,
    fshowDependant: fshowDependant,
    faddThis: finitAddThis
  };

} )( window );


$(function() {

	function init(){

		funcionamientos.finitInyeccionPlantillas(); //inyeccion plantillas
		funcionamientos.finitf3();
		funcionamientos.finitComponentPestana(); //pestañas
		funcionamientos.fComponentC29(); //selects
		funcionamientos.fcomponentM2();
		funcionamientos.finitMobileComponentsSelectorPop();
		funcionamientos.finitComponentsSelectorPopUp();
		funcionamientos.finitComponentCerrar();
		funcionamientos.finitComparadorGeneral();
		funcionamientos.finitComparadorPreparatoria();
		funcionamientos.finitSliderGeneral();
		funcionamientos.fComponentSlideDown();
		funcionamientos.finitFormGeneral();
		funcionamientos.finitLoadMore();
		funcionamientos.finitCalendario();
		funcionamientos.fmenusAction();
		funcionamientos.finitVideos();
		funcionamientos.finitResize();
		funcionamientos.finitSelectDependants();
		funcionamientos.finitMenuM1();
		funcionamientos.finitFAQ();
		funcionamientos.finitMenuInteractivo();
		funcionamientos.fexpandForm();
		funcionamientos.fshowDependant();
		funcionamientos.fComponentMenu(); //menu
		funcionamientos.fMobileMenu();
		funcionamientos.fscrollMenu();
		funcionamientos.faddThis();

	}

	init();

});

function NuevoError(mensaje){
	this.name = "UVM Error";
    this.message = mensaje;
}

NuevoError.prototype = new Error();
