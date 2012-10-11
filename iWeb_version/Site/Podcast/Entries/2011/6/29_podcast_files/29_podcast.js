// Created by iWeb 3.0.1 local-build-20110629

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="316" style="height: 316px; left: 200px; position: absolute; top: 16px; width: 300px; z-index: 1; "><param name="src" value="../../../../Media/podcast.m4a" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="300" height="316" style="height: 316px; left: 200px; position: absolute; top: 16px; width: 300px; z-index: 1; "><param name="src" value="29_podcast_files/itbounce.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/podcast.m4a"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="300" height="316" data="../../../../Media/podcast.m4a" style="height: 316px; left: 200px; position: absolute; top: 16px; width: 300px; z-index: 1; "><param name="src" value="../../../../Media/podcast.m4a"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('29_podcast_files/29_podcastMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');Widget.onload();fixAllIEPNGs('../../../../Media/transparent.gif');fixupPodcast('id3','id4');fixupIECSS3Opacity('id6');BlogFixupPreviousNext();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
