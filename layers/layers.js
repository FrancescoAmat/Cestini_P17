var wms_layers = [];


        var lyr_Mappa_web_Fra_0 = new ol.layer.Tile({
            'title': 'Mappa_web_Fra',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_39_Domenica_13_07_20_43_1 = new ol.format.GeoJSON();
var features_39_Domenica_13_07_20_43_1 = format_39_Domenica_13_07_20_43_1.readFeatures(json_39_Domenica_13_07_20_43_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Domenica_13_07_20_43_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Domenica_13_07_20_43_1.addFeatures(features_39_Domenica_13_07_20_43_1);
var lyr_39_Domenica_13_07_20_43_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Domenica_13_07_20_43_1, 
                style: style_39_Domenica_13_07_20_43_1,
                popuplayertitle: '39_Domenica_13_07_20_43',
                interactive: true,
    title: '39_Domenica_13_07_20_43<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_0.png" /> 1<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_1.png" /> 2<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_2.png" /> 3<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_3.png" /> 4<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_4.png" /> 5<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_5.png" /> 6<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_6.png" /> 7<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_7.png" /> 8<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_8.png" /> 9<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_9.png" /> 10<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_10.png" /> 11<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_11.png" /> 12<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_1_12.png" /> 13<br />' });
var format_38_Domenica_05_30_13_06_2 = new ol.format.GeoJSON();
var features_38_Domenica_05_30_13_06_2 = format_38_Domenica_05_30_13_06_2.readFeatures(json_38_Domenica_05_30_13_06_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Domenica_05_30_13_06_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Domenica_05_30_13_06_2.addFeatures(features_38_Domenica_05_30_13_06_2);
var lyr_38_Domenica_05_30_13_06_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Domenica_05_30_13_06_2, 
                style: style_38_Domenica_05_30_13_06_2,
                popuplayertitle: '38_Domenica_05_30_13_06',
                interactive: true,
    title: '38_Domenica_05_30_13_06<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_0.png" /> 1<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_1.png" /> 2<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_2.png" /> 3<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_3.png" /> 4<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_4.png" /> 5<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_5.png" /> 6<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_6.png" /> 7<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_7.png" /> 8<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_8.png" /> 9<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_9.png" /> 10<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_10.png" /> 11<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_11.png" /> 12<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_12.png" /> 13<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_13.png" /> 14<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_14.png" /> 15<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_15.png" /> 16<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_16.png" /> 17<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_17.png" /> 18<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_18.png" /> 19<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_19.png" /> 20<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_20.png" /> 21<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_2_21.png" /> 22<br />' });
var format_37_Domenica_19_00_02_36_3 = new ol.format.GeoJSON();
var features_37_Domenica_19_00_02_36_3 = format_37_Domenica_19_00_02_36_3.readFeatures(json_37_Domenica_19_00_02_36_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Domenica_19_00_02_36_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Domenica_19_00_02_36_3.addFeatures(features_37_Domenica_19_00_02_36_3);
var lyr_37_Domenica_19_00_02_36_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Domenica_19_00_02_36_3, 
                style: style_37_Domenica_19_00_02_36_3,
                popuplayertitle: '37_Domenica_19_00_02_36',
                interactive: true,
    title: '37_Domenica_19_00_02_36<br />\
    <img src="styles/legend/37_Domenica_19_00_02_36_3_0.png" /> 1<br />' });
var format_34_Domenica_21_50_05_26_4 = new ol.format.GeoJSON();
var features_34_Domenica_21_50_05_26_4 = format_34_Domenica_21_50_05_26_4.readFeatures(json_34_Domenica_21_50_05_26_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Domenica_21_50_05_26_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Domenica_21_50_05_26_4.addFeatures(features_34_Domenica_21_50_05_26_4);
var lyr_34_Domenica_21_50_05_26_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Domenica_21_50_05_26_4, 
                style: style_34_Domenica_21_50_05_26_4,
                popuplayertitle: '34_Domenica_21_50_05_26',
                interactive: true,
    title: '34_Domenica_21_50_05_26<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_4_0.png" /> 1<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_4_1.png" /> 2<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_4_2.png" /> 3<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_4_3.png" /> 4<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_4_4.png" /> 5<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_4_5.png" /> 6<br />' });
var format_33_Domenica_09_30_15_50_5 = new ol.format.GeoJSON();
var features_33_Domenica_09_30_15_50_5 = format_33_Domenica_09_30_15_50_5.readFeatures(json_33_Domenica_09_30_15_50_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Domenica_09_30_15_50_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Domenica_09_30_15_50_5.addFeatures(features_33_Domenica_09_30_15_50_5);
var lyr_33_Domenica_09_30_15_50_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Domenica_09_30_15_50_5, 
                style: style_33_Domenica_09_30_15_50_5,
                popuplayertitle: '33_Domenica_09_30_15_50',
                interactive: true,
    title: '33_Domenica_09_30_15_50<br />\
    <img src="styles/legend/33_Domenica_09_30_15_50_5_0.png" /> 1<br />' });
var format_39_Sabato_13_07_20_43_6 = new ol.format.GeoJSON();
var features_39_Sabato_13_07_20_43_6 = format_39_Sabato_13_07_20_43_6.readFeatures(json_39_Sabato_13_07_20_43_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Sabato_13_07_20_43_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Sabato_13_07_20_43_6.addFeatures(features_39_Sabato_13_07_20_43_6);
var lyr_39_Sabato_13_07_20_43_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Sabato_13_07_20_43_6, 
                style: style_39_Sabato_13_07_20_43_6,
                popuplayertitle: '39_Sabato_13_07_20_43',
                interactive: true,
    title: '39_Sabato_13_07_20_43<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_0.png" /> 1<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_1.png" /> 2<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_2.png" /> 3<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_3.png" /> 4<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_4.png" /> 5<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_5.png" /> 6<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_6.png" /> 7<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_7.png" /> 8<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_8.png" /> 9<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_9.png" /> 10<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_10.png" /> 11<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_11.png" /> 12<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_6_12.png" /> 13<br />' });
var format_38_Sabato_05_30_13_06_7 = new ol.format.GeoJSON();
var features_38_Sabato_05_30_13_06_7 = format_38_Sabato_05_30_13_06_7.readFeatures(json_38_Sabato_05_30_13_06_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Sabato_05_30_13_06_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Sabato_05_30_13_06_7.addFeatures(features_38_Sabato_05_30_13_06_7);
var lyr_38_Sabato_05_30_13_06_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Sabato_05_30_13_06_7, 
                style: style_38_Sabato_05_30_13_06_7,
                popuplayertitle: '38_Sabato_05_30_13_06',
                interactive: true,
    title: '38_Sabato_05_30_13_06<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_0.png" /> 1<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_1.png" /> 2<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_2.png" /> 3<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_3.png" /> 4<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_4.png" /> 5<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_5.png" /> 6<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_6.png" /> 7<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_7.png" /> 8<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_8.png" /> 9<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_9.png" /> 10<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_10.png" /> 11<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_11.png" /> 12<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_12.png" /> 13<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_13.png" /> 14<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_14.png" /> 15<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_15.png" /> 16<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_16.png" /> 17<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_17.png" /> 18<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_18.png" /> 19<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_19.png" /> 20<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_20.png" /> 21<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_7_21.png" /> 22<br />' });
var format_37_Sabato_19_00_02_36_8 = new ol.format.GeoJSON();
var features_37_Sabato_19_00_02_36_8 = format_37_Sabato_19_00_02_36_8.readFeatures(json_37_Sabato_19_00_02_36_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Sabato_19_00_02_36_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Sabato_19_00_02_36_8.addFeatures(features_37_Sabato_19_00_02_36_8);
var lyr_37_Sabato_19_00_02_36_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Sabato_19_00_02_36_8, 
                style: style_37_Sabato_19_00_02_36_8,
                popuplayertitle: '37_Sabato_19_00_02_36',
                interactive: true,
    title: '37_Sabato_19_00_02_36<br />\
    <img src="styles/legend/37_Sabato_19_00_02_36_8_0.png" /> 1<br />' });
var format_34_Sabato_21_50_05_26_9 = new ol.format.GeoJSON();
var features_34_Sabato_21_50_05_26_9 = format_34_Sabato_21_50_05_26_9.readFeatures(json_34_Sabato_21_50_05_26_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Sabato_21_50_05_26_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Sabato_21_50_05_26_9.addFeatures(features_34_Sabato_21_50_05_26_9);
var lyr_34_Sabato_21_50_05_26_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Sabato_21_50_05_26_9, 
                style: style_34_Sabato_21_50_05_26_9,
                popuplayertitle: '34_Sabato_21_50_05_26',
                interactive: true,
    title: '34_Sabato_21_50_05_26<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_9_0.png" /> 1<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_9_1.png" /> 2<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_9_2.png" /> 3<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_9_3.png" /> 4<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_9_4.png" /> 5<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_9_5.png" /> 6<br />' });
var format_33_Sabato_09_30_15_50_10 = new ol.format.GeoJSON();
var features_33_Sabato_09_30_15_50_10 = format_33_Sabato_09_30_15_50_10.readFeatures(json_33_Sabato_09_30_15_50_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Sabato_09_30_15_50_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Sabato_09_30_15_50_10.addFeatures(features_33_Sabato_09_30_15_50_10);
var lyr_33_Sabato_09_30_15_50_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Sabato_09_30_15_50_10, 
                style: style_33_Sabato_09_30_15_50_10,
                popuplayertitle: '33_Sabato_09_30_15_50',
                interactive: true,
    title: '33_Sabato_09_30_15_50<br />\
    <img src="styles/legend/33_Sabato_09_30_15_50_10_0.png" /> 1<br />' });
var format_39_Venerdi_13_07_20_43_11 = new ol.format.GeoJSON();
var features_39_Venerdi_13_07_20_43_11 = format_39_Venerdi_13_07_20_43_11.readFeatures(json_39_Venerdi_13_07_20_43_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Venerdi_13_07_20_43_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Venerdi_13_07_20_43_11.addFeatures(features_39_Venerdi_13_07_20_43_11);
var lyr_39_Venerdi_13_07_20_43_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Venerdi_13_07_20_43_11, 
                style: style_39_Venerdi_13_07_20_43_11,
                popuplayertitle: '39_Venerdi_13_07_20_43',
                interactive: true,
    title: '39_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_0.png" /> 1<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_1.png" /> 2<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_2.png" /> 3<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_3.png" /> 4<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_4.png" /> 5<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_5.png" /> 6<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_6.png" /> 7<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_7.png" /> 8<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_8.png" /> 9<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_9.png" /> 10<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_10.png" /> 11<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_11.png" /> 12<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_11_12.png" /> 13<br />' });
var format_38_Venerdi_05_30_13_06_12 = new ol.format.GeoJSON();
var features_38_Venerdi_05_30_13_06_12 = format_38_Venerdi_05_30_13_06_12.readFeatures(json_38_Venerdi_05_30_13_06_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Venerdi_05_30_13_06_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Venerdi_05_30_13_06_12.addFeatures(features_38_Venerdi_05_30_13_06_12);
var lyr_38_Venerdi_05_30_13_06_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Venerdi_05_30_13_06_12, 
                style: style_38_Venerdi_05_30_13_06_12,
                popuplayertitle: '38_Venerdi_05_30_13_06',
                interactive: true,
    title: '38_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_0.png" /> 1<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_1.png" /> 2<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_2.png" /> 3<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_3.png" /> 4<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_4.png" /> 5<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_5.png" /> 6<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_6.png" /> 7<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_7.png" /> 8<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_8.png" /> 9<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_9.png" /> 10<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_10.png" /> 11<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_11.png" /> 12<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_12.png" /> 13<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_13.png" /> 14<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_14.png" /> 15<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_15.png" /> 16<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_16.png" /> 17<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_17.png" /> 18<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_18.png" /> 19<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_19.png" /> 20<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_20.png" /> 21<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_12_21.png" /> 22<br />' });
var format_37_Venerdi_19_00_02_36_13 = new ol.format.GeoJSON();
var features_37_Venerdi_19_00_02_36_13 = format_37_Venerdi_19_00_02_36_13.readFeatures(json_37_Venerdi_19_00_02_36_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Venerdi_19_00_02_36_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Venerdi_19_00_02_36_13.addFeatures(features_37_Venerdi_19_00_02_36_13);
var lyr_37_Venerdi_19_00_02_36_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Venerdi_19_00_02_36_13, 
                style: style_37_Venerdi_19_00_02_36_13,
                popuplayertitle: '37_Venerdi_19_00_02_36',
                interactive: true,
    title: '37_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/37_Venerdi_19_00_02_36_13_0.png" /> 1<br />' });
var format_34_Venerdi_21_50_05_26_14 = new ol.format.GeoJSON();
var features_34_Venerdi_21_50_05_26_14 = format_34_Venerdi_21_50_05_26_14.readFeatures(json_34_Venerdi_21_50_05_26_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Venerdi_21_50_05_26_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Venerdi_21_50_05_26_14.addFeatures(features_34_Venerdi_21_50_05_26_14);
var lyr_34_Venerdi_21_50_05_26_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Venerdi_21_50_05_26_14, 
                style: style_34_Venerdi_21_50_05_26_14,
                popuplayertitle: '34_Venerdi_21_50_05_26',
                interactive: true,
    title: '34_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_14_0.png" /> 1<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_14_1.png" /> 2<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_14_2.png" /> 3<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_14_3.png" /> 4<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_14_4.png" /> 5<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_14_5.png" /> 6<br />' });
var format_33_Venerdi_09_30_15_50_15 = new ol.format.GeoJSON();
var features_33_Venerdi_09_30_15_50_15 = format_33_Venerdi_09_30_15_50_15.readFeatures(json_33_Venerdi_09_30_15_50_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Venerdi_09_30_15_50_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Venerdi_09_30_15_50_15.addFeatures(features_33_Venerdi_09_30_15_50_15);
var lyr_33_Venerdi_09_30_15_50_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Venerdi_09_30_15_50_15, 
                style: style_33_Venerdi_09_30_15_50_15,
                popuplayertitle: '33_Venerdi_09_30_15_50',
                interactive: true,
    title: '33_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/33_Venerdi_09_30_15_50_15_0.png" /> 1<br />' });
var format_39_Giovedi_13_07_20_43_16 = new ol.format.GeoJSON();
var features_39_Giovedi_13_07_20_43_16 = format_39_Giovedi_13_07_20_43_16.readFeatures(json_39_Giovedi_13_07_20_43_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Giovedi_13_07_20_43_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Giovedi_13_07_20_43_16.addFeatures(features_39_Giovedi_13_07_20_43_16);
var lyr_39_Giovedi_13_07_20_43_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Giovedi_13_07_20_43_16, 
                style: style_39_Giovedi_13_07_20_43_16,
                popuplayertitle: '39_Giovedi_13_07_20_43',
                interactive: true,
    title: '39_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_0.png" /> 1<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_1.png" /> 2<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_2.png" /> 3<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_3.png" /> 4<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_4.png" /> 5<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_5.png" /> 6<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_6.png" /> 7<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_7.png" /> 8<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_8.png" /> 9<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_9.png" /> 10<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_10.png" /> 11<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_11.png" /> 12<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_16_12.png" /> 13<br />' });
var format_38_Giovedi_05_30_13_06_17 = new ol.format.GeoJSON();
var features_38_Giovedi_05_30_13_06_17 = format_38_Giovedi_05_30_13_06_17.readFeatures(json_38_Giovedi_05_30_13_06_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Giovedi_05_30_13_06_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Giovedi_05_30_13_06_17.addFeatures(features_38_Giovedi_05_30_13_06_17);
var lyr_38_Giovedi_05_30_13_06_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Giovedi_05_30_13_06_17, 
                style: style_38_Giovedi_05_30_13_06_17,
                popuplayertitle: '38_Giovedi_05_30_13_06',
                interactive: true,
    title: '38_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_0.png" /> 1<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_1.png" /> 2<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_2.png" /> 3<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_3.png" /> 4<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_4.png" /> 5<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_5.png" /> 6<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_6.png" /> 7<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_7.png" /> 8<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_8.png" /> 9<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_9.png" /> 10<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_10.png" /> 11<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_11.png" /> 12<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_12.png" /> 13<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_13.png" /> 14<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_14.png" /> 15<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_15.png" /> 16<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_16.png" /> 17<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_17.png" /> 18<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_18.png" /> 19<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_19.png" /> 20<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_20.png" /> 21<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_17_21.png" /> 22<br />' });
var format_37_Giovedi_19_00_02_36_18 = new ol.format.GeoJSON();
var features_37_Giovedi_19_00_02_36_18 = format_37_Giovedi_19_00_02_36_18.readFeatures(json_37_Giovedi_19_00_02_36_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Giovedi_19_00_02_36_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Giovedi_19_00_02_36_18.addFeatures(features_37_Giovedi_19_00_02_36_18);
var lyr_37_Giovedi_19_00_02_36_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Giovedi_19_00_02_36_18, 
                style: style_37_Giovedi_19_00_02_36_18,
                popuplayertitle: '37_Giovedi_19_00_02_36',
                interactive: true,
    title: '37_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/37_Giovedi_19_00_02_36_18_0.png" /> 1<br />' });
var format_34_Giovedi_21_50_05_26_19 = new ol.format.GeoJSON();
var features_34_Giovedi_21_50_05_26_19 = format_34_Giovedi_21_50_05_26_19.readFeatures(json_34_Giovedi_21_50_05_26_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Giovedi_21_50_05_26_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Giovedi_21_50_05_26_19.addFeatures(features_34_Giovedi_21_50_05_26_19);
var lyr_34_Giovedi_21_50_05_26_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Giovedi_21_50_05_26_19, 
                style: style_34_Giovedi_21_50_05_26_19,
                popuplayertitle: '34_Giovedi_21_50_05_26',
                interactive: true,
    title: '34_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_19_0.png" /> 1<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_19_1.png" /> 2<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_19_2.png" /> 3<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_19_3.png" /> 4<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_19_4.png" /> 5<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_19_5.png" /> 6<br />' });
var format_33_Giovedi_09_30_15_50_20 = new ol.format.GeoJSON();
var features_33_Giovedi_09_30_15_50_20 = format_33_Giovedi_09_30_15_50_20.readFeatures(json_33_Giovedi_09_30_15_50_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Giovedi_09_30_15_50_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Giovedi_09_30_15_50_20.addFeatures(features_33_Giovedi_09_30_15_50_20);
var lyr_33_Giovedi_09_30_15_50_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Giovedi_09_30_15_50_20, 
                style: style_33_Giovedi_09_30_15_50_20,
                popuplayertitle: '33_Giovedi_09_30_15_50',
                interactive: true,
    title: '33_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/33_Giovedi_09_30_15_50_20_0.png" /> 1<br />' });
var format_39_Mercoledi_13_07_20_43_21 = new ol.format.GeoJSON();
var features_39_Mercoledi_13_07_20_43_21 = format_39_Mercoledi_13_07_20_43_21.readFeatures(json_39_Mercoledi_13_07_20_43_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Mercoledi_13_07_20_43_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Mercoledi_13_07_20_43_21.addFeatures(features_39_Mercoledi_13_07_20_43_21);
var lyr_39_Mercoledi_13_07_20_43_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Mercoledi_13_07_20_43_21, 
                style: style_39_Mercoledi_13_07_20_43_21,
                popuplayertitle: '39_Mercoledi_13_07_20_43',
                interactive: true,
    title: '39_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_0.png" /> 1<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_1.png" /> 2<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_2.png" /> 3<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_3.png" /> 4<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_4.png" /> 5<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_5.png" /> 6<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_6.png" /> 7<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_7.png" /> 8<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_8.png" /> 9<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_9.png" /> 10<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_10.png" /> 11<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_11.png" /> 12<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_21_12.png" /> 13<br />' });
var format_38_Mercoledi_05_30_13_06_22 = new ol.format.GeoJSON();
var features_38_Mercoledi_05_30_13_06_22 = format_38_Mercoledi_05_30_13_06_22.readFeatures(json_38_Mercoledi_05_30_13_06_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Mercoledi_05_30_13_06_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Mercoledi_05_30_13_06_22.addFeatures(features_38_Mercoledi_05_30_13_06_22);
var lyr_38_Mercoledi_05_30_13_06_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Mercoledi_05_30_13_06_22, 
                style: style_38_Mercoledi_05_30_13_06_22,
                popuplayertitle: '38_Mercoledi_05_30_13_06',
                interactive: true,
    title: '38_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_0.png" /> 1<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_1.png" /> 2<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_2.png" /> 3<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_3.png" /> 4<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_4.png" /> 5<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_5.png" /> 6<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_6.png" /> 7<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_7.png" /> 8<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_8.png" /> 9<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_9.png" /> 10<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_10.png" /> 11<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_11.png" /> 12<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_12.png" /> 13<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_13.png" /> 14<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_14.png" /> 15<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_15.png" /> 16<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_16.png" /> 17<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_17.png" /> 18<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_18.png" /> 19<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_19.png" /> 20<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_20.png" /> 21<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_22_21.png" /> 22<br />' });
var format_37_Mercoledi_19_00_02_36_23 = new ol.format.GeoJSON();
var features_37_Mercoledi_19_00_02_36_23 = format_37_Mercoledi_19_00_02_36_23.readFeatures(json_37_Mercoledi_19_00_02_36_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Mercoledi_19_00_02_36_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Mercoledi_19_00_02_36_23.addFeatures(features_37_Mercoledi_19_00_02_36_23);
var lyr_37_Mercoledi_19_00_02_36_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Mercoledi_19_00_02_36_23, 
                style: style_37_Mercoledi_19_00_02_36_23,
                popuplayertitle: '37_Mercoledi_19_00_02_36',
                interactive: true,
    title: '37_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/37_Mercoledi_19_00_02_36_23_0.png" /> 1<br />' });
var format_34_Mercoledi_21_50_05_26_24 = new ol.format.GeoJSON();
var features_34_Mercoledi_21_50_05_26_24 = format_34_Mercoledi_21_50_05_26_24.readFeatures(json_34_Mercoledi_21_50_05_26_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Mercoledi_21_50_05_26_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Mercoledi_21_50_05_26_24.addFeatures(features_34_Mercoledi_21_50_05_26_24);
var lyr_34_Mercoledi_21_50_05_26_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Mercoledi_21_50_05_26_24, 
                style: style_34_Mercoledi_21_50_05_26_24,
                popuplayertitle: '34_Mercoledi_21_50_05_26',
                interactive: true,
    title: '34_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_24_0.png" /> 1<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_24_1.png" /> 2<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_24_2.png" /> 3<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_24_3.png" /> 4<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_24_4.png" /> 5<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_24_5.png" /> 6<br />' });
var format_33_Mercoledi_09_30_15_50_25 = new ol.format.GeoJSON();
var features_33_Mercoledi_09_30_15_50_25 = format_33_Mercoledi_09_30_15_50_25.readFeatures(json_33_Mercoledi_09_30_15_50_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Mercoledi_09_30_15_50_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Mercoledi_09_30_15_50_25.addFeatures(features_33_Mercoledi_09_30_15_50_25);
var lyr_33_Mercoledi_09_30_15_50_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Mercoledi_09_30_15_50_25, 
                style: style_33_Mercoledi_09_30_15_50_25,
                popuplayertitle: '33_Mercoledi_09_30_15_50',
                interactive: true,
    title: '33_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/33_Mercoledi_09_30_15_50_25_0.png" /> 1<br />' });
var format_39_Martedi_13_07_20_43_26 = new ol.format.GeoJSON();
var features_39_Martedi_13_07_20_43_26 = format_39_Martedi_13_07_20_43_26.readFeatures(json_39_Martedi_13_07_20_43_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Martedi_13_07_20_43_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Martedi_13_07_20_43_26.addFeatures(features_39_Martedi_13_07_20_43_26);
var lyr_39_Martedi_13_07_20_43_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Martedi_13_07_20_43_26, 
                style: style_39_Martedi_13_07_20_43_26,
                popuplayertitle: '39_Martedi_13_07_20_43',
                interactive: true,
    title: '39_Martedi_13_07_20_43<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_0.png" /> 1<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_1.png" /> 2<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_2.png" /> 3<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_3.png" /> 4<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_4.png" /> 5<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_5.png" /> 6<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_6.png" /> 7<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_7.png" /> 8<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_8.png" /> 9<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_9.png" /> 10<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_10.png" /> 11<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_11.png" /> 12<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_26_12.png" /> 13<br />' });
var format_38_Martedi_05_30_13_06_27 = new ol.format.GeoJSON();
var features_38_Martedi_05_30_13_06_27 = format_38_Martedi_05_30_13_06_27.readFeatures(json_38_Martedi_05_30_13_06_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Martedi_05_30_13_06_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Martedi_05_30_13_06_27.addFeatures(features_38_Martedi_05_30_13_06_27);
var lyr_38_Martedi_05_30_13_06_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Martedi_05_30_13_06_27, 
                style: style_38_Martedi_05_30_13_06_27,
                popuplayertitle: '38_Martedi_05_30_13_06',
                interactive: true,
    title: '38_Martedi_05_30_13_06<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_0.png" /> 1<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_1.png" /> 2<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_2.png" /> 3<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_3.png" /> 4<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_4.png" /> 5<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_5.png" /> 6<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_6.png" /> 7<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_7.png" /> 8<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_8.png" /> 9<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_9.png" /> 10<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_10.png" /> 11<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_11.png" /> 12<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_12.png" /> 13<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_13.png" /> 14<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_14.png" /> 15<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_15.png" /> 16<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_16.png" /> 17<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_17.png" /> 18<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_18.png" /> 19<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_19.png" /> 20<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_20.png" /> 21<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_27_21.png" /> 22<br />' });
var format_37_Martedi_19_00_02_36_28 = new ol.format.GeoJSON();
var features_37_Martedi_19_00_02_36_28 = format_37_Martedi_19_00_02_36_28.readFeatures(json_37_Martedi_19_00_02_36_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Martedi_19_00_02_36_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Martedi_19_00_02_36_28.addFeatures(features_37_Martedi_19_00_02_36_28);
var lyr_37_Martedi_19_00_02_36_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Martedi_19_00_02_36_28, 
                style: style_37_Martedi_19_00_02_36_28,
                popuplayertitle: '37_Martedi_19_00_02_36',
                interactive: true,
    title: '37_Martedi_19_00_02_36<br />\
    <img src="styles/legend/37_Martedi_19_00_02_36_28_0.png" /> 1<br />' });
var format_34_Martedi_21_50_05_26_29 = new ol.format.GeoJSON();
var features_34_Martedi_21_50_05_26_29 = format_34_Martedi_21_50_05_26_29.readFeatures(json_34_Martedi_21_50_05_26_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Martedi_21_50_05_26_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Martedi_21_50_05_26_29.addFeatures(features_34_Martedi_21_50_05_26_29);
var lyr_34_Martedi_21_50_05_26_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Martedi_21_50_05_26_29, 
                style: style_34_Martedi_21_50_05_26_29,
                popuplayertitle: '34_Martedi_21_50_05_26',
                interactive: true,
    title: '34_Martedi_21_50_05_26<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_29_0.png" /> 1<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_29_1.png" /> 2<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_29_2.png" /> 3<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_29_3.png" /> 4<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_29_4.png" /> 5<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_29_5.png" /> 6<br />' });
var format_33_Martedi_09_30_15_50_30 = new ol.format.GeoJSON();
var features_33_Martedi_09_30_15_50_30 = format_33_Martedi_09_30_15_50_30.readFeatures(json_33_Martedi_09_30_15_50_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Martedi_09_30_15_50_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Martedi_09_30_15_50_30.addFeatures(features_33_Martedi_09_30_15_50_30);
var lyr_33_Martedi_09_30_15_50_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Martedi_09_30_15_50_30, 
                style: style_33_Martedi_09_30_15_50_30,
                popuplayertitle: '33_Martedi_09_30_15_50',
                interactive: true,
    title: '33_Martedi_09_30_15_50<br />\
    <img src="styles/legend/33_Martedi_09_30_15_50_30_0.png" /> 1<br />' });
var format_39_Lunedi_13_07_20_43_31 = new ol.format.GeoJSON();
var features_39_Lunedi_13_07_20_43_31 = format_39_Lunedi_13_07_20_43_31.readFeatures(json_39_Lunedi_13_07_20_43_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Lunedi_13_07_20_43_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Lunedi_13_07_20_43_31.addFeatures(features_39_Lunedi_13_07_20_43_31);
var lyr_39_Lunedi_13_07_20_43_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Lunedi_13_07_20_43_31, 
                style: style_39_Lunedi_13_07_20_43_31,
                popuplayertitle: '39_Lunedi_13_07_20_43',
                interactive: true,
    title: '39_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_0.png" /> 1<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_1.png" /> 2<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_2.png" /> 3<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_3.png" /> 4<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_4.png" /> 5<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_5.png" /> 6<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_6.png" /> 7<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_7.png" /> 8<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_8.png" /> 9<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_9.png" /> 10<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_10.png" /> 11<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_11.png" /> 12<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_31_12.png" /> 13<br />' });
var format_38_Lunedi_05_30_13_06_32 = new ol.format.GeoJSON();
var features_38_Lunedi_05_30_13_06_32 = format_38_Lunedi_05_30_13_06_32.readFeatures(json_38_Lunedi_05_30_13_06_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Lunedi_05_30_13_06_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Lunedi_05_30_13_06_32.addFeatures(features_38_Lunedi_05_30_13_06_32);
var lyr_38_Lunedi_05_30_13_06_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Lunedi_05_30_13_06_32, 
                style: style_38_Lunedi_05_30_13_06_32,
                popuplayertitle: '38_Lunedi_05_30_13_06',
                interactive: true,
    title: '38_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_0.png" /> 1<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_1.png" /> 2<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_2.png" /> 3<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_3.png" /> 4<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_4.png" /> 5<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_5.png" /> 6<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_6.png" /> 7<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_7.png" /> 8<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_8.png" /> 9<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_9.png" /> 10<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_10.png" /> 11<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_11.png" /> 12<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_12.png" /> 13<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_13.png" /> 14<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_14.png" /> 15<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_15.png" /> 16<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_16.png" /> 17<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_17.png" /> 18<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_18.png" /> 19<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_19.png" /> 20<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_20.png" /> 21<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_32_21.png" /> 22<br />' });
var format_37_Lunedi_19_00_02_36_33 = new ol.format.GeoJSON();
var features_37_Lunedi_19_00_02_36_33 = format_37_Lunedi_19_00_02_36_33.readFeatures(json_37_Lunedi_19_00_02_36_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Lunedi_19_00_02_36_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Lunedi_19_00_02_36_33.addFeatures(features_37_Lunedi_19_00_02_36_33);
var lyr_37_Lunedi_19_00_02_36_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Lunedi_19_00_02_36_33, 
                style: style_37_Lunedi_19_00_02_36_33,
                popuplayertitle: '37_Lunedi_19_00_02_36',
                interactive: true,
    title: '37_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/37_Lunedi_19_00_02_36_33_0.png" /> 1<br />' });
var format_34_Lunedi_21_50_05_26_34 = new ol.format.GeoJSON();
var features_34_Lunedi_21_50_05_26_34 = format_34_Lunedi_21_50_05_26_34.readFeatures(json_34_Lunedi_21_50_05_26_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Lunedi_21_50_05_26_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Lunedi_21_50_05_26_34.addFeatures(features_34_Lunedi_21_50_05_26_34);
var lyr_34_Lunedi_21_50_05_26_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Lunedi_21_50_05_26_34, 
                style: style_34_Lunedi_21_50_05_26_34,
                popuplayertitle: '34_Lunedi_21_50_05_26',
                interactive: true,
    title: '34_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_34_0.png" /> 1<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_34_1.png" /> 2<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_34_2.png" /> 3<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_34_3.png" /> 4<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_34_4.png" /> 5<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_34_5.png" /> 6<br />' });
var format_33_Lunedi_09_30_15_50_35 = new ol.format.GeoJSON();
var features_33_Lunedi_09_30_15_50_35 = format_33_Lunedi_09_30_15_50_35.readFeatures(json_33_Lunedi_09_30_15_50_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Lunedi_09_30_15_50_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Lunedi_09_30_15_50_35.addFeatures(features_33_Lunedi_09_30_15_50_35);
var lyr_33_Lunedi_09_30_15_50_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Lunedi_09_30_15_50_35, 
                style: style_33_Lunedi_09_30_15_50_35,
                popuplayertitle: '33_Lunedi_09_30_15_50',
                interactive: true,
    title: '33_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/33_Lunedi_09_30_15_50_35_0.png" /> 1<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_39_Lunedi_13_07_20_43_31,lyr_38_Lunedi_05_30_13_06_32,lyr_37_Lunedi_19_00_02_36_33,lyr_34_Lunedi_21_50_05_26_34,lyr_33_Lunedi_09_30_15_50_35,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_39_Martedi_13_07_20_43_26,lyr_38_Martedi_05_30_13_06_27,lyr_37_Martedi_19_00_02_36_28,lyr_34_Martedi_21_50_05_26_29,lyr_33_Martedi_09_30_15_50_30,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_39_Mercoledi_13_07_20_43_21,lyr_38_Mercoledi_05_30_13_06_22,lyr_37_Mercoledi_19_00_02_36_23,lyr_34_Mercoledi_21_50_05_26_24,lyr_33_Mercoledi_09_30_15_50_25,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_39_Giovedi_13_07_20_43_16,lyr_38_Giovedi_05_30_13_06_17,lyr_37_Giovedi_19_00_02_36_18,lyr_34_Giovedi_21_50_05_26_19,lyr_33_Giovedi_09_30_15_50_20,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_39_Venerdi_13_07_20_43_11,lyr_38_Venerdi_05_30_13_06_12,lyr_37_Venerdi_19_00_02_36_13,lyr_34_Venerdi_21_50_05_26_14,lyr_33_Venerdi_09_30_15_50_15,],
                                fold: 'close',
                                title: 'Venerdi'});
var group_Sabato = new ol.layer.Group({
                                layers: [lyr_39_Sabato_13_07_20_43_6,lyr_38_Sabato_05_30_13_06_7,lyr_37_Sabato_19_00_02_36_8,lyr_34_Sabato_21_50_05_26_9,lyr_33_Sabato_09_30_15_50_10,],
                                fold: 'close',
                                title: 'Sabato'});
var group_Domenica = new ol.layer.Group({
                                layers: [lyr_39_Domenica_13_07_20_43_1,lyr_38_Domenica_05_30_13_06_2,lyr_37_Domenica_19_00_02_36_3,lyr_34_Domenica_21_50_05_26_4,lyr_33_Domenica_09_30_15_50_5,],
                                fold: 'close',
                                title: 'Domenica'});

lyr_Mappa_web_Fra_0.setVisible(true);lyr_39_Domenica_13_07_20_43_1.setVisible(true);lyr_38_Domenica_05_30_13_06_2.setVisible(true);lyr_37_Domenica_19_00_02_36_3.setVisible(true);lyr_34_Domenica_21_50_05_26_4.setVisible(true);lyr_33_Domenica_09_30_15_50_5.setVisible(true);lyr_39_Sabato_13_07_20_43_6.setVisible(true);lyr_38_Sabato_05_30_13_06_7.setVisible(true);lyr_37_Sabato_19_00_02_36_8.setVisible(true);lyr_34_Sabato_21_50_05_26_9.setVisible(true);lyr_33_Sabato_09_30_15_50_10.setVisible(true);lyr_39_Venerdi_13_07_20_43_11.setVisible(true);lyr_38_Venerdi_05_30_13_06_12.setVisible(true);lyr_37_Venerdi_19_00_02_36_13.setVisible(true);lyr_34_Venerdi_21_50_05_26_14.setVisible(true);lyr_33_Venerdi_09_30_15_50_15.setVisible(true);lyr_39_Giovedi_13_07_20_43_16.setVisible(true);lyr_38_Giovedi_05_30_13_06_17.setVisible(true);lyr_37_Giovedi_19_00_02_36_18.setVisible(true);lyr_34_Giovedi_21_50_05_26_19.setVisible(true);lyr_33_Giovedi_09_30_15_50_20.setVisible(true);lyr_39_Mercoledi_13_07_20_43_21.setVisible(true);lyr_38_Mercoledi_05_30_13_06_22.setVisible(true);lyr_37_Mercoledi_19_00_02_36_23.setVisible(true);lyr_34_Mercoledi_21_50_05_26_24.setVisible(true);lyr_33_Mercoledi_09_30_15_50_25.setVisible(true);lyr_39_Martedi_13_07_20_43_26.setVisible(true);lyr_38_Martedi_05_30_13_06_27.setVisible(true);lyr_37_Martedi_19_00_02_36_28.setVisible(true);lyr_34_Martedi_21_50_05_26_29.setVisible(true);lyr_33_Martedi_09_30_15_50_30.setVisible(true);lyr_39_Lunedi_13_07_20_43_31.setVisible(true);lyr_38_Lunedi_05_30_13_06_32.setVisible(true);lyr_37_Lunedi_19_00_02_36_33.setVisible(true);lyr_34_Lunedi_21_50_05_26_34.setVisible(true);lyr_33_Lunedi_09_30_15_50_35.setVisible(true);
var layersList = [lyr_Mappa_web_Fra_0,group_Domenica,group_Sabato,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_39_Domenica_13_07_20_43_1.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Domenica_05_30_13_06_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Domenica_19_00_02_36_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Domenica_21_50_05_26_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Domenica_09_30_15_50_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Sabato_13_07_20_43_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Sabato_05_30_13_06_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Sabato_19_00_02_36_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Sabato_21_50_05_26_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Sabato_09_30_15_50_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Venerdi_13_07_20_43_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Venerdi_05_30_13_06_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Venerdi_19_00_02_36_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Venerdi_21_50_05_26_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Venerdi_09_30_15_50_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Giovedi_13_07_20_43_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Giovedi_05_30_13_06_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Giovedi_19_00_02_36_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Giovedi_21_50_05_26_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Giovedi_09_30_15_50_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Mercoledi_13_07_20_43_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Mercoledi_05_30_13_06_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Mercoledi_19_00_02_36_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Mercoledi_21_50_05_26_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Mercoledi_09_30_15_50_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Martedi_13_07_20_43_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Martedi_05_30_13_06_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Martedi_19_00_02_36_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Martedi_21_50_05_26_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Martedi_09_30_15_50_30.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Lunedi_13_07_20_43_31.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Lunedi_05_30_13_06_32.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Lunedi_19_00_02_36_33.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Lunedi_21_50_05_26_34.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Lunedi_09_30_15_50_35.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Domenica_13_07_20_43_1.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Domenica_05_30_13_06_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Domenica_19_00_02_36_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Domenica_21_50_05_26_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Domenica_09_30_15_50_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Sabato_13_07_20_43_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Sabato_05_30_13_06_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Sabato_19_00_02_36_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Sabato_21_50_05_26_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Sabato_09_30_15_50_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Venerdi_13_07_20_43_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Venerdi_05_30_13_06_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Venerdi_19_00_02_36_13.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Venerdi_21_50_05_26_14.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Venerdi_09_30_15_50_15.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Giovedi_13_07_20_43_16.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Giovedi_05_30_13_06_17.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Giovedi_19_00_02_36_18.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Giovedi_21_50_05_26_19.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Giovedi_09_30_15_50_20.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Mercoledi_13_07_20_43_21.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Mercoledi_05_30_13_06_22.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Mercoledi_19_00_02_36_23.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Mercoledi_21_50_05_26_24.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Mercoledi_09_30_15_50_25.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Martedi_13_07_20_43_26.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Martedi_05_30_13_06_27.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Martedi_19_00_02_36_28.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Martedi_21_50_05_26_29.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Martedi_09_30_15_50_30.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Lunedi_13_07_20_43_31.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Lunedi_05_30_13_06_32.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Lunedi_19_00_02_36_33.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Lunedi_21_50_05_26_34.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Lunedi_09_30_15_50_35.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Domenica_13_07_20_43_1.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Domenica_05_30_13_06_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Domenica_19_00_02_36_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Domenica_21_50_05_26_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Domenica_09_30_15_50_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Sabato_13_07_20_43_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Sabato_05_30_13_06_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Sabato_19_00_02_36_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Sabato_21_50_05_26_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Sabato_09_30_15_50_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Venerdi_13_07_20_43_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Venerdi_05_30_13_06_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Venerdi_19_00_02_36_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Venerdi_21_50_05_26_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Venerdi_09_30_15_50_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Giovedi_13_07_20_43_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Giovedi_05_30_13_06_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Giovedi_19_00_02_36_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Giovedi_21_50_05_26_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Giovedi_09_30_15_50_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Mercoledi_13_07_20_43_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Mercoledi_05_30_13_06_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Mercoledi_19_00_02_36_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Mercoledi_21_50_05_26_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Mercoledi_09_30_15_50_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Martedi_13_07_20_43_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Martedi_05_30_13_06_27.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Martedi_19_00_02_36_28.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Martedi_21_50_05_26_29.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Martedi_09_30_15_50_30.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Lunedi_13_07_20_43_31.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Lunedi_05_30_13_06_32.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Lunedi_19_00_02_36_33.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Lunedi_21_50_05_26_34.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Lunedi_09_30_15_50_35.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Lunedi_09_30_15_50_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});