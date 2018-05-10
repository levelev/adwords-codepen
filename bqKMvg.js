/*Função para capturar parametros da url

fonte:
http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript

var foo = getParameterByName('foo'); // "lorem"
*/

function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/* Tradução*/

var label_titulo;
var label_descricao;
var label_Site;
var label_Phone;
var label_Caracteristica;
var label_SiteLink;
var label_TituloDesktop;
var label_TituloMobile;
var label_btn_gDocs;
var label_btn_Responsive;
var label_btn_PSD;

var userLang = navigator.language || navigator.userLanguage; 

/*Meu codigo*/

$( document ).ready(function()
{
  //aplicando traducao
  if(userLang != 'pt-BR')
  {
    label_titulo = 'Title';
    label_descricao = 'Description';
    label_Site = 'site.com/shortCut1/shortCut2/';
    label_Phone = "Phone +1-000-000-0000";
    label_Caracteristica = "Feature 1, Feature 2, Feature 3";
    label_TituloDesktop = '<span><i class="fa fa-desktop" aria-hidden="true"></i></span> Desktop Version';
    label_TituloMobile = '<span><i class="fa fa-mobile" aria-hidden="true"></i></span> Mobile Version';
    label_btn_gDocs = 'Do u wanna create some Adwords ads and save on a Google sheet? <b>Click here.</b>';
    label_btn_Responsive ='Meet the <b>Responsive Format Mockup Generator</b> for GDN campaigns';
    label_btn_PSD = 'Download the Mockup Version in PSD. <br /> <b>Click here.</b>';
    
    $('h2 span i').html('Simulator');
    $('.titulo1Ad').attr('placeholder',label_titulo + ' 1');
    $('.titulo2Ad').attr('placeholder',label_titulo + ' 2');
    $('.descricaoAd').attr('placeholder',label_descricao);
    $('.linkSiteAd').attr('placeholder',label_Site);
    $('.telefoneAd').attr('placeholder',label_Phone);
    $('.caracteristicasAd').attr('placeholder',label_Caracteristica);
    $('.gDocs').html(label_btn_gDocs);
    $('.PSD').html(label_btn_PSD);
    $('.Responsive').html(label_btn_Responsive);
    $('.tituloDesktop').html(label_TituloDesktop);
    $('.tituloMobile').html(label_TituloMobile);
    $('.tag').html('Ad');
    $('.link').html(label_Site);
    $('.titulo1').html(label_titulo + ' 1 ');
    $('.titulo2').html(label_titulo + ' 2 ');
    $('.descricao').html(label_descricao);
  }
  
  //omitir opcionais
  $('.telefone, .telefoneLine, .divisorTL, .fraseDestaque, .siteLinks').hide();
  
  function preencheDados()
  {
    //acionando Contadores
    $('.cT1').val(Number($('.titulo1Ad').attr('maxLength')) - $('.titulo1Ad').val().length);
    $('.cT2').val(Number($('.titulo2Ad').attr('maxLength')) - $('.titulo2Ad').val().length);
    $('.cD').val(Number($('.descricaoAd').attr('maxLength')) - $('.descricaoAd').val().length);
    
    //titulo 1
    if( $('form .titulo1Ad').val() !='')
    {
     $('#anuncio1 .titulo1').html($('form .titulo1Ad').val());
   }
   else
   {
     $('#anuncio1 .titulo1').html('Título 1');
   }
   
    //titulo 2
    if( $('form .titulo2Ad').val() !='')
    {
     $('#anuncio1 .titulo2').html($('form .titulo2Ad').val());
   }
   else
   {
     $('#anuncio1 .titulo2').html('Título 2');
   }

   if( $('form .descricaoAd').val() !='')
   {
     $('#anuncio1 .descricao').html($('form .descricaoAd').val());
   }
   else
   {
     $('#anuncio1 .descricao').html('Texto descritivo');
   }

   if( $('form .linkSiteAd').val() !='')
   {
     $('#anuncio1 .link').html($('form .linkSiteAd').val());
   }
   else
   {
     $('#anuncio1 .link').html('site.com.br/atalho1/atalho2/');
   }
   
   /*telefone*/
   
   if( $('form .telefoneAd').val() !='')
   {
     $('#anuncio1 .telefone').html($('form .telefoneAd').val());
   }
   else
   {
     $('#anuncio1 .telefone').html('(00) 00000.0000');
   }    
   
   
   /*Frases Destaques*/
   if( $('form .caracteristicasAd').val() !='')
   {
    var lista =  $('form .caracteristicasAd').val().split(",");
    
    var montagem;
    
    for(i=0; i < lista.length; i++)
    {
      
      if(i == 0)
      {
        montagem = lista[i];
      }
      else
      {
        montagem = montagem + ' · ' + lista[i];
      }
    }
    
    $('.fraseDestaque').html(montagem);
  }
  else
  {
    $('.fraseDestaque').html('Característica 1 · Característica 2');
  }
  
  /*Site Links*/
  if( $('form .siteLinksAd').val() !='')
  {
    var lista =  $('form .siteLinksAd').val().split(",");
    
    var montagemD = '';
    var montagemM = '';
    
      //montagem dos links de exemplo
      for(i=0; i < lista.length; i++)
      {
        var linkLista = '<a href="#">'+lista[i]+'</a>';
        
        montagemD = montagemD+'<li>'+linkLista+'</li>';  
        
        if(i == 0)
        {            
          montagemM = linkLista;
        }
        else
        { 
          montagemM = montagemM + ' · ' + linkLista;
        }
      }
      
      $('.desktop .siteLinks ul').html(montagemD);
      $('.mobileBox .siteLinks').html(montagemM);

    }
    
  }
  
  $('form input, form textarea').keyup(function()
  {
   preencheDados();
 });
  
  $('#telefoneCheck').click(function(){
    $('.telefone, .telefoneLine, .divisorTL').toggle();
  });

  $('#caracteristicaCheck').click(function(){    
    $('.fraseDestaque').toggle();
  });

  $('#linksCheck').click(function(){    
    $('.siteLinks').toggle();
  });
  
  $('.downloadBtn').click(function(){
    
    html2canvas($(".renderAnuncio"), {
      onrendered: function(canvas) {
        theCanvas = canvas;
        document.body.appendChild(canvas);

                // Convert and download as image 
                Canvas2Image.saveAsPNG(canvas); 
                //$("body").append(canvas);
                // Clean up 
                document.body.removeChild(canvas);
              }
            });
    
    ga('send', 'event', 'GDN Mockup', 'Download', 'PNG Mockup');
    
    
  });
  
  $('.resetBtn').click(function(){
    ga('send', 'event', 'GDN Mockup', 'Reset', 'Limpar Campos');  
    document.location.reload(true);
  });
  
  //preenchimento via URL
  if(getParameterByName('titulo1') != null)
  {
   $('.titulo1Ad').val(getParameterByName('titulo1'));
   $('.titulo2Ad').val(getParameterByName('titulo2'));
   $('.descricaoAd').val(getParameterByName('descricao'));
   $('.linkSiteAd').val(getParameterByName('linkSite'));
   preencheDados();
 }

 
});