var wms_layers = [];


        var lyr_Mappa_web_0 = new ol.layer.Tile({
            'title': 'Mappa_web',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_33_Domenica_09_30_15_50_1 = new ol.format.GeoJSON();
var features_33_Domenica_09_30_15_50_1 = format_33_Domenica_09_30_15_50_1.readFeatures(json_33_Domenica_09_30_15_50_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Domenica_09_30_15_50_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Domenica_09_30_15_50_1.addFeatures(features_33_Domenica_09_30_15_50_1);
var lyr_33_Domenica_09_30_15_50_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Domenica_09_30_15_50_1, 
                style: style_33_Domenica_09_30_15_50_1,
                popuplayertitle: '33_Domenica_09_30_15_50',
                interactive: true,
    title: '33_Domenica_09_30_15_50<br />\
    <img src="styles/legend/33_Domenica_09_30_15_50_1_0.png" /> 1<br />' });
var format_34_Domenica_21_50_05_26_2 = new ol.format.GeoJSON();
var features_34_Domenica_21_50_05_26_2 = format_34_Domenica_21_50_05_26_2.readFeatures(json_34_Domenica_21_50_05_26_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Domenica_21_50_05_26_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Domenica_21_50_05_26_2.addFeatures(features_34_Domenica_21_50_05_26_2);
var lyr_34_Domenica_21_50_05_26_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Domenica_21_50_05_26_2, 
                style: style_34_Domenica_21_50_05_26_2,
                popuplayertitle: '34_Domenica_21_50_05_26',
                interactive: true,
    title: '34_Domenica_21_50_05_26<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_2_0.png" /> 1<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_2_1.png" /> 2<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_2_2.png" /> 3<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_2_3.png" /> 4<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_2_4.png" /> 5<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_2_5.png" /> 6<br />' });
var format_34_Mercoledi_21_50_05_26_3 = new ol.format.GeoJSON();
var features_34_Mercoledi_21_50_05_26_3 = format_34_Mercoledi_21_50_05_26_3.readFeatures(json_34_Mercoledi_21_50_05_26_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Mercoledi_21_50_05_26_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Mercoledi_21_50_05_26_3.addFeatures(features_34_Mercoledi_21_50_05_26_3);
var lyr_34_Mercoledi_21_50_05_26_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Mercoledi_21_50_05_26_3, 
                style: style_34_Mercoledi_21_50_05_26_3,
                popuplayertitle: '34_Mercoledi_21_50_05_26',
                interactive: true,
    title: '34_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_3_0.png" /> 1<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_3_1.png" /> 2<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_3_2.png" /> 3<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_3_3.png" /> 4<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_3_4.png" /> 5<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_3_5.png" /> 6<br />' });
var format_37_Domenica_19_00_02_36_4 = new ol.format.GeoJSON();
var features_37_Domenica_19_00_02_36_4 = format_37_Domenica_19_00_02_36_4.readFeatures(json_37_Domenica_19_00_02_36_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Domenica_19_00_02_36_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Domenica_19_00_02_36_4.addFeatures(features_37_Domenica_19_00_02_36_4);
var lyr_37_Domenica_19_00_02_36_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Domenica_19_00_02_36_4, 
                style: style_37_Domenica_19_00_02_36_4,
                popuplayertitle: '37_Domenica_19_00_02_36',
                interactive: true,
    title: '37_Domenica_19_00_02_36<br />\
    <img src="styles/legend/37_Domenica_19_00_02_36_4_0.png" /> 1<br />' });
var format_38_Domenica_05_30_13_06_5 = new ol.format.GeoJSON();
var features_38_Domenica_05_30_13_06_5 = format_38_Domenica_05_30_13_06_5.readFeatures(json_38_Domenica_05_30_13_06_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Domenica_05_30_13_06_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Domenica_05_30_13_06_5.addFeatures(features_38_Domenica_05_30_13_06_5);
var lyr_38_Domenica_05_30_13_06_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Domenica_05_30_13_06_5, 
                style: style_38_Domenica_05_30_13_06_5,
                popuplayertitle: '38_Domenica_05_30_13_06',
                interactive: true,
    title: '38_Domenica_05_30_13_06<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_0.png" /> 1<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_1.png" /> 2<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_2.png" /> 3<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_3.png" /> 4<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_4.png" /> 5<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_5.png" /> 6<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_6.png" /> 7<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_7.png" /> 8<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_8.png" /> 9<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_9.png" /> 10<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_10.png" /> 11<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_11.png" /> 12<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_12.png" /> 13<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_13.png" /> 14<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_14.png" /> 15<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_15.png" /> 16<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_16.png" /> 17<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_17.png" /> 18<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_18.png" /> 19<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_19.png" /> 20<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_20.png" /> 21<br />\
    <img src="styles/legend/38_Domenica_05_30_13_06_5_21.png" /> 22<br />' });
var format_39_Domenica_13_07_20_43_6 = new ol.format.GeoJSON();
var features_39_Domenica_13_07_20_43_6 = format_39_Domenica_13_07_20_43_6.readFeatures(json_39_Domenica_13_07_20_43_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Domenica_13_07_20_43_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Domenica_13_07_20_43_6.addFeatures(features_39_Domenica_13_07_20_43_6);
var lyr_39_Domenica_13_07_20_43_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Domenica_13_07_20_43_6, 
                style: style_39_Domenica_13_07_20_43_6,
                popuplayertitle: '39_Domenica_13_07_20_43',
                interactive: true,
    title: '39_Domenica_13_07_20_43<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_0.png" /> 1<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_1.png" /> 2<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_2.png" /> 3<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_3.png" /> 4<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_4.png" /> 5<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_5.png" /> 6<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_6.png" /> 7<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_7.png" /> 8<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_8.png" /> 9<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_9.png" /> 10<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_10.png" /> 11<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_11.png" /> 12<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_6_12.png" /> 13<br />' });
var format_551_Domenica_16_00_23_30_7 = new ol.format.GeoJSON();
var features_551_Domenica_16_00_23_30_7 = format_551_Domenica_16_00_23_30_7.readFeatures(json_551_Domenica_16_00_23_30_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Domenica_16_00_23_30_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Domenica_16_00_23_30_7.addFeatures(features_551_Domenica_16_00_23_30_7);
var lyr_551_Domenica_16_00_23_30_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Domenica_16_00_23_30_7, 
                style: style_551_Domenica_16_00_23_30_7,
                popuplayertitle: '551_Domenica_16_00_23_30',
                interactive: true,
    title: '551_Domenica_16_00_23_30<br />\
    <img src="styles/legend/551_Domenica_16_00_23_30_7_0.png" /> 1<br />' });
var format_669_Domenica_13_00_19_00_8 = new ol.format.GeoJSON();
var features_669_Domenica_13_00_19_00_8 = format_669_Domenica_13_00_19_00_8.readFeatures(json_669_Domenica_13_00_19_00_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_669_Domenica_13_00_19_00_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_669_Domenica_13_00_19_00_8.addFeatures(features_669_Domenica_13_00_19_00_8);
var lyr_669_Domenica_13_00_19_00_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_669_Domenica_13_00_19_00_8, 
                style: style_669_Domenica_13_00_19_00_8,
                popuplayertitle: '669_Domenica_13_00_19_00',
                interactive: true,
    title: '669_Domenica_13_00_19_00<br />\
    <img src="styles/legend/669_Domenica_13_00_19_00_8_0.png" /> 1<br />' });
var format_671_Domenica_10_00_16_00_9 = new ol.format.GeoJSON();
var features_671_Domenica_10_00_16_00_9 = format_671_Domenica_10_00_16_00_9.readFeatures(json_671_Domenica_10_00_16_00_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Domenica_10_00_16_00_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Domenica_10_00_16_00_9.addFeatures(features_671_Domenica_10_00_16_00_9);
var lyr_671_Domenica_10_00_16_00_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Domenica_10_00_16_00_9, 
                style: style_671_Domenica_10_00_16_00_9,
                popuplayertitle: '671_Domenica_10_00_16_00',
                interactive: true,
    title: '671_Domenica_10_00_16_00<br />\
    <img src="styles/legend/671_Domenica_10_00_16_00_9_0.png" /> 1<br />' });
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
var format_34_Sabato_21_50_05_26_11 = new ol.format.GeoJSON();
var features_34_Sabato_21_50_05_26_11 = format_34_Sabato_21_50_05_26_11.readFeatures(json_34_Sabato_21_50_05_26_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Sabato_21_50_05_26_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Sabato_21_50_05_26_11.addFeatures(features_34_Sabato_21_50_05_26_11);
var lyr_34_Sabato_21_50_05_26_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Sabato_21_50_05_26_11, 
                style: style_34_Sabato_21_50_05_26_11,
                popuplayertitle: '34_Sabato_21_50_05_26',
                interactive: true,
    title: '34_Sabato_21_50_05_26<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_11_0.png" /> 1<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_11_1.png" /> 2<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_11_2.png" /> 3<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_11_3.png" /> 4<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_11_4.png" /> 5<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_11_5.png" /> 6<br />' });
var format_37_Sabato_19_00_02_36_12 = new ol.format.GeoJSON();
var features_37_Sabato_19_00_02_36_12 = format_37_Sabato_19_00_02_36_12.readFeatures(json_37_Sabato_19_00_02_36_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Sabato_19_00_02_36_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Sabato_19_00_02_36_12.addFeatures(features_37_Sabato_19_00_02_36_12);
var lyr_37_Sabato_19_00_02_36_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Sabato_19_00_02_36_12, 
                style: style_37_Sabato_19_00_02_36_12,
                popuplayertitle: '37_Sabato_19_00_02_36',
                interactive: true,
    title: '37_Sabato_19_00_02_36<br />\
    <img src="styles/legend/37_Sabato_19_00_02_36_12_0.png" /> 1<br />' });
var format_38_Sabato_05_30_13_06_13 = new ol.format.GeoJSON();
var features_38_Sabato_05_30_13_06_13 = format_38_Sabato_05_30_13_06_13.readFeatures(json_38_Sabato_05_30_13_06_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Sabato_05_30_13_06_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Sabato_05_30_13_06_13.addFeatures(features_38_Sabato_05_30_13_06_13);
var lyr_38_Sabato_05_30_13_06_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Sabato_05_30_13_06_13, 
                style: style_38_Sabato_05_30_13_06_13,
                popuplayertitle: '38_Sabato_05_30_13_06',
                interactive: true,
    title: '38_Sabato_05_30_13_06<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_0.png" /> 1<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_1.png" /> 2<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_2.png" /> 3<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_3.png" /> 4<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_4.png" /> 5<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_5.png" /> 6<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_6.png" /> 7<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_7.png" /> 8<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_8.png" /> 9<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_9.png" /> 10<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_10.png" /> 11<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_11.png" /> 12<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_12.png" /> 13<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_13.png" /> 14<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_14.png" /> 15<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_15.png" /> 16<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_16.png" /> 17<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_17.png" /> 18<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_18.png" /> 19<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_19.png" /> 20<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_20.png" /> 21<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_13_21.png" /> 22<br />' });
var format_39_Sabato_13_07_20_43_14 = new ol.format.GeoJSON();
var features_39_Sabato_13_07_20_43_14 = format_39_Sabato_13_07_20_43_14.readFeatures(json_39_Sabato_13_07_20_43_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Sabato_13_07_20_43_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Sabato_13_07_20_43_14.addFeatures(features_39_Sabato_13_07_20_43_14);
var lyr_39_Sabato_13_07_20_43_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Sabato_13_07_20_43_14, 
                style: style_39_Sabato_13_07_20_43_14,
                popuplayertitle: '39_Sabato_13_07_20_43',
                interactive: true,
    title: '39_Sabato_13_07_20_43<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_0.png" /> 1<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_1.png" /> 2<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_2.png" /> 3<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_3.png" /> 4<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_4.png" /> 5<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_5.png" /> 6<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_6.png" /> 7<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_7.png" /> 8<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_8.png" /> 9<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_9.png" /> 10<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_10.png" /> 11<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_11.png" /> 12<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_14_12.png" /> 13<br />' });
var format_551_Sabato_16_00_23_30_15 = new ol.format.GeoJSON();
var features_551_Sabato_16_00_23_30_15 = format_551_Sabato_16_00_23_30_15.readFeatures(json_551_Sabato_16_00_23_30_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Sabato_16_00_23_30_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Sabato_16_00_23_30_15.addFeatures(features_551_Sabato_16_00_23_30_15);
var lyr_551_Sabato_16_00_23_30_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Sabato_16_00_23_30_15, 
                style: style_551_Sabato_16_00_23_30_15,
                popuplayertitle: '551_Sabato_16_00_23_30',
                interactive: true,
    title: '551_Sabato_16_00_23_30<br />\
    <img src="styles/legend/551_Sabato_16_00_23_30_15_0.png" /> 1<br />' });
var format_669_Sabato_13_00_19_00_16 = new ol.format.GeoJSON();
var features_669_Sabato_13_00_19_00_16 = format_669_Sabato_13_00_19_00_16.readFeatures(json_669_Sabato_13_00_19_00_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_669_Sabato_13_00_19_00_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_669_Sabato_13_00_19_00_16.addFeatures(features_669_Sabato_13_00_19_00_16);
var lyr_669_Sabato_13_00_19_00_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_669_Sabato_13_00_19_00_16, 
                style: style_669_Sabato_13_00_19_00_16,
                popuplayertitle: '669_Sabato_13_00_19_00',
                interactive: true,
    title: '669_Sabato_13_00_19_00<br />\
    <img src="styles/legend/669_Sabato_13_00_19_00_16_0.png" /> 1<br />' });
var format_671_Sabato_10_00_16_00_17 = new ol.format.GeoJSON();
var features_671_Sabato_10_00_16_00_17 = format_671_Sabato_10_00_16_00_17.readFeatures(json_671_Sabato_10_00_16_00_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Sabato_10_00_16_00_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Sabato_10_00_16_00_17.addFeatures(features_671_Sabato_10_00_16_00_17);
var lyr_671_Sabato_10_00_16_00_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Sabato_10_00_16_00_17, 
                style: style_671_Sabato_10_00_16_00_17,
                popuplayertitle: '671_Sabato_10_00_16_00',
                interactive: true,
    title: '671_Sabato_10_00_16_00<br />\
    <img src="styles/legend/671_Sabato_10_00_16_00_17_0.png" /> 1<br />' });
var format_33_Venerdi_09_30_15_50_18 = new ol.format.GeoJSON();
var features_33_Venerdi_09_30_15_50_18 = format_33_Venerdi_09_30_15_50_18.readFeatures(json_33_Venerdi_09_30_15_50_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Venerdi_09_30_15_50_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Venerdi_09_30_15_50_18.addFeatures(features_33_Venerdi_09_30_15_50_18);
var lyr_33_Venerdi_09_30_15_50_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Venerdi_09_30_15_50_18, 
                style: style_33_Venerdi_09_30_15_50_18,
                popuplayertitle: '33_Venerdi_09_30_15_50',
                interactive: true,
    title: '33_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/33_Venerdi_09_30_15_50_18_0.png" /> 1<br />' });
var format_34_Venerdi_21_50_05_26_19 = new ol.format.GeoJSON();
var features_34_Venerdi_21_50_05_26_19 = format_34_Venerdi_21_50_05_26_19.readFeatures(json_34_Venerdi_21_50_05_26_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Venerdi_21_50_05_26_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Venerdi_21_50_05_26_19.addFeatures(features_34_Venerdi_21_50_05_26_19);
var lyr_34_Venerdi_21_50_05_26_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Venerdi_21_50_05_26_19, 
                style: style_34_Venerdi_21_50_05_26_19,
                popuplayertitle: '34_Venerdi_21_50_05_26',
                interactive: true,
    title: '34_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_19_0.png" /> 1<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_19_1.png" /> 2<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_19_2.png" /> 3<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_19_3.png" /> 4<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_19_4.png" /> 5<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_19_5.png" /> 6<br />' });
var format_37_Venerdi_19_00_02_36_20 = new ol.format.GeoJSON();
var features_37_Venerdi_19_00_02_36_20 = format_37_Venerdi_19_00_02_36_20.readFeatures(json_37_Venerdi_19_00_02_36_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Venerdi_19_00_02_36_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Venerdi_19_00_02_36_20.addFeatures(features_37_Venerdi_19_00_02_36_20);
var lyr_37_Venerdi_19_00_02_36_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Venerdi_19_00_02_36_20, 
                style: style_37_Venerdi_19_00_02_36_20,
                popuplayertitle: '37_Venerdi_19_00_02_36',
                interactive: true,
    title: '37_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/37_Venerdi_19_00_02_36_20_0.png" /> 1<br />' });
var format_38_Venerdi_05_30_13_06_21 = new ol.format.GeoJSON();
var features_38_Venerdi_05_30_13_06_21 = format_38_Venerdi_05_30_13_06_21.readFeatures(json_38_Venerdi_05_30_13_06_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Venerdi_05_30_13_06_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Venerdi_05_30_13_06_21.addFeatures(features_38_Venerdi_05_30_13_06_21);
var lyr_38_Venerdi_05_30_13_06_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Venerdi_05_30_13_06_21, 
                style: style_38_Venerdi_05_30_13_06_21,
                popuplayertitle: '38_Venerdi_05_30_13_06',
                interactive: true,
    title: '38_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_0.png" /> 1<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_1.png" /> 2<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_2.png" /> 3<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_3.png" /> 4<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_4.png" /> 5<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_5.png" /> 6<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_6.png" /> 7<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_7.png" /> 8<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_8.png" /> 9<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_9.png" /> 10<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_10.png" /> 11<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_11.png" /> 12<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_12.png" /> 13<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_13.png" /> 14<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_14.png" /> 15<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_15.png" /> 16<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_16.png" /> 17<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_17.png" /> 18<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_18.png" /> 19<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_19.png" /> 20<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_20.png" /> 21<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_21_21.png" /> 22<br />' });
var format_39_Venerdi_13_07_20_43_22 = new ol.format.GeoJSON();
var features_39_Venerdi_13_07_20_43_22 = format_39_Venerdi_13_07_20_43_22.readFeatures(json_39_Venerdi_13_07_20_43_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Venerdi_13_07_20_43_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Venerdi_13_07_20_43_22.addFeatures(features_39_Venerdi_13_07_20_43_22);
var lyr_39_Venerdi_13_07_20_43_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Venerdi_13_07_20_43_22, 
                style: style_39_Venerdi_13_07_20_43_22,
                popuplayertitle: '39_Venerdi_13_07_20_43',
                interactive: true,
    title: '39_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_0.png" /> 1<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_1.png" /> 2<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_2.png" /> 3<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_3.png" /> 4<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_4.png" /> 5<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_5.png" /> 6<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_6.png" /> 7<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_7.png" /> 8<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_8.png" /> 9<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_9.png" /> 10<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_10.png" /> 11<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_11.png" /> 12<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_22_12.png" /> 13<br />' });
var format_551_Venerdi_16_00_23_30_23 = new ol.format.GeoJSON();
var features_551_Venerdi_16_00_23_30_23 = format_551_Venerdi_16_00_23_30_23.readFeatures(json_551_Venerdi_16_00_23_30_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Venerdi_16_00_23_30_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Venerdi_16_00_23_30_23.addFeatures(features_551_Venerdi_16_00_23_30_23);
var lyr_551_Venerdi_16_00_23_30_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Venerdi_16_00_23_30_23, 
                style: style_551_Venerdi_16_00_23_30_23,
                popuplayertitle: '551_Venerdi_16_00_23_30',
                interactive: true,
    title: '551_Venerdi_16_00_23_30<br />\
    <img src="styles/legend/551_Venerdi_16_00_23_30_23_0.png" /> 1<br />' });
var format_669_Venerdi_13_00_19_00_24 = new ol.format.GeoJSON();
var features_669_Venerdi_13_00_19_00_24 = format_669_Venerdi_13_00_19_00_24.readFeatures(json_669_Venerdi_13_00_19_00_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_669_Venerdi_13_00_19_00_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_669_Venerdi_13_00_19_00_24.addFeatures(features_669_Venerdi_13_00_19_00_24);
var lyr_669_Venerdi_13_00_19_00_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_669_Venerdi_13_00_19_00_24, 
                style: style_669_Venerdi_13_00_19_00_24,
                popuplayertitle: '669_Venerdi_13_00_19_00',
                interactive: true,
    title: '669_Venerdi_13_00_19_00<br />\
    <img src="styles/legend/669_Venerdi_13_00_19_00_24_0.png" /> 1<br />' });
var format_671_Venerdi_10_00_16_00_25 = new ol.format.GeoJSON();
var features_671_Venerdi_10_00_16_00_25 = format_671_Venerdi_10_00_16_00_25.readFeatures(json_671_Venerdi_10_00_16_00_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Venerdi_10_00_16_00_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Venerdi_10_00_16_00_25.addFeatures(features_671_Venerdi_10_00_16_00_25);
var lyr_671_Venerdi_10_00_16_00_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Venerdi_10_00_16_00_25, 
                style: style_671_Venerdi_10_00_16_00_25,
                popuplayertitle: '671_Venerdi_10_00_16_00',
                interactive: true,
    title: '671_Venerdi_10_00_16_00<br />\
    <img src="styles/legend/671_Venerdi_10_00_16_00_25_0.png" /> 1<br />' });
var format_33_Giovedi_09_30_15_50_26 = new ol.format.GeoJSON();
var features_33_Giovedi_09_30_15_50_26 = format_33_Giovedi_09_30_15_50_26.readFeatures(json_33_Giovedi_09_30_15_50_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Giovedi_09_30_15_50_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Giovedi_09_30_15_50_26.addFeatures(features_33_Giovedi_09_30_15_50_26);
var lyr_33_Giovedi_09_30_15_50_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Giovedi_09_30_15_50_26, 
                style: style_33_Giovedi_09_30_15_50_26,
                popuplayertitle: '33_Giovedi_09_30_15_50',
                interactive: true,
    title: '33_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/33_Giovedi_09_30_15_50_26_0.png" /> 1<br />' });
var format_34_Giovedi_21_50_05_26_27 = new ol.format.GeoJSON();
var features_34_Giovedi_21_50_05_26_27 = format_34_Giovedi_21_50_05_26_27.readFeatures(json_34_Giovedi_21_50_05_26_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Giovedi_21_50_05_26_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Giovedi_21_50_05_26_27.addFeatures(features_34_Giovedi_21_50_05_26_27);
var lyr_34_Giovedi_21_50_05_26_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Giovedi_21_50_05_26_27, 
                style: style_34_Giovedi_21_50_05_26_27,
                popuplayertitle: '34_Giovedi_21_50_05_26',
                interactive: true,
    title: '34_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_27_0.png" /> 1<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_27_1.png" /> 2<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_27_2.png" /> 3<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_27_3.png" /> 4<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_27_4.png" /> 5<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_27_5.png" /> 6<br />' });
var format_37_Giovedi_19_00_02_36_28 = new ol.format.GeoJSON();
var features_37_Giovedi_19_00_02_36_28 = format_37_Giovedi_19_00_02_36_28.readFeatures(json_37_Giovedi_19_00_02_36_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Giovedi_19_00_02_36_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Giovedi_19_00_02_36_28.addFeatures(features_37_Giovedi_19_00_02_36_28);
var lyr_37_Giovedi_19_00_02_36_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Giovedi_19_00_02_36_28, 
                style: style_37_Giovedi_19_00_02_36_28,
                popuplayertitle: '37_Giovedi_19_00_02_36',
                interactive: true,
    title: '37_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/37_Giovedi_19_00_02_36_28_0.png" /> 1<br />' });
var format_38_Giovedi_05_30_13_06_29 = new ol.format.GeoJSON();
var features_38_Giovedi_05_30_13_06_29 = format_38_Giovedi_05_30_13_06_29.readFeatures(json_38_Giovedi_05_30_13_06_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Giovedi_05_30_13_06_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Giovedi_05_30_13_06_29.addFeatures(features_38_Giovedi_05_30_13_06_29);
var lyr_38_Giovedi_05_30_13_06_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Giovedi_05_30_13_06_29, 
                style: style_38_Giovedi_05_30_13_06_29,
                popuplayertitle: '38_Giovedi_05_30_13_06',
                interactive: true,
    title: '38_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_0.png" /> 1<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_1.png" /> 2<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_2.png" /> 3<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_3.png" /> 4<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_4.png" /> 5<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_5.png" /> 6<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_6.png" /> 7<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_7.png" /> 8<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_8.png" /> 9<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_9.png" /> 10<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_10.png" /> 11<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_11.png" /> 12<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_12.png" /> 13<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_13.png" /> 14<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_14.png" /> 15<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_15.png" /> 16<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_16.png" /> 17<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_17.png" /> 18<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_18.png" /> 19<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_19.png" /> 20<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_20.png" /> 21<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_29_21.png" /> 22<br />' });
var format_39_Giovedi_13_07_20_43_30 = new ol.format.GeoJSON();
var features_39_Giovedi_13_07_20_43_30 = format_39_Giovedi_13_07_20_43_30.readFeatures(json_39_Giovedi_13_07_20_43_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Giovedi_13_07_20_43_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Giovedi_13_07_20_43_30.addFeatures(features_39_Giovedi_13_07_20_43_30);
var lyr_39_Giovedi_13_07_20_43_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Giovedi_13_07_20_43_30, 
                style: style_39_Giovedi_13_07_20_43_30,
                popuplayertitle: '39_Giovedi_13_07_20_43',
                interactive: true,
    title: '39_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_0.png" /> 1<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_1.png" /> 2<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_2.png" /> 3<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_3.png" /> 4<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_4.png" /> 5<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_5.png" /> 6<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_6.png" /> 7<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_7.png" /> 8<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_8.png" /> 9<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_9.png" /> 10<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_10.png" /> 11<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_11.png" /> 12<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_30_12.png" /> 13<br />' });
var format_551_Giovedi_16_00_23_30_31 = new ol.format.GeoJSON();
var features_551_Giovedi_16_00_23_30_31 = format_551_Giovedi_16_00_23_30_31.readFeatures(json_551_Giovedi_16_00_23_30_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Giovedi_16_00_23_30_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Giovedi_16_00_23_30_31.addFeatures(features_551_Giovedi_16_00_23_30_31);
var lyr_551_Giovedi_16_00_23_30_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Giovedi_16_00_23_30_31, 
                style: style_551_Giovedi_16_00_23_30_31,
                popuplayertitle: '551_Giovedi_16_00_23_30',
                interactive: true,
    title: '551_Giovedi_16_00_23_30<br />\
    <img src="styles/legend/551_Giovedi_16_00_23_30_31_0.png" /> 1<br />' });
var format_671_Giovedi_10_00_16_00_32 = new ol.format.GeoJSON();
var features_671_Giovedi_10_00_16_00_32 = format_671_Giovedi_10_00_16_00_32.readFeatures(json_671_Giovedi_10_00_16_00_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Giovedi_10_00_16_00_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Giovedi_10_00_16_00_32.addFeatures(features_671_Giovedi_10_00_16_00_32);
var lyr_671_Giovedi_10_00_16_00_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Giovedi_10_00_16_00_32, 
                style: style_671_Giovedi_10_00_16_00_32,
                popuplayertitle: '671_Giovedi_10_00_16_00',
                interactive: true,
    title: '671_Giovedi_10_00_16_00<br />\
    <img src="styles/legend/671_Giovedi_10_00_16_00_32_0.png" /> 1<br />' });
var format_33_Mercoledi_09_30_15_50_33 = new ol.format.GeoJSON();
var features_33_Mercoledi_09_30_15_50_33 = format_33_Mercoledi_09_30_15_50_33.readFeatures(json_33_Mercoledi_09_30_15_50_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Mercoledi_09_30_15_50_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Mercoledi_09_30_15_50_33.addFeatures(features_33_Mercoledi_09_30_15_50_33);
var lyr_33_Mercoledi_09_30_15_50_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Mercoledi_09_30_15_50_33, 
                style: style_33_Mercoledi_09_30_15_50_33,
                popuplayertitle: '33_Mercoledi_09_30_15_50',
                interactive: true,
    title: '33_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/33_Mercoledi_09_30_15_50_33_0.png" /> 1<br />' });
var format_37_Mercoledi_19_00_02_36_34 = new ol.format.GeoJSON();
var features_37_Mercoledi_19_00_02_36_34 = format_37_Mercoledi_19_00_02_36_34.readFeatures(json_37_Mercoledi_19_00_02_36_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Mercoledi_19_00_02_36_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Mercoledi_19_00_02_36_34.addFeatures(features_37_Mercoledi_19_00_02_36_34);
var lyr_37_Mercoledi_19_00_02_36_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Mercoledi_19_00_02_36_34, 
                style: style_37_Mercoledi_19_00_02_36_34,
                popuplayertitle: '37_Mercoledi_19_00_02_36',
                interactive: true,
    title: '37_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/37_Mercoledi_19_00_02_36_34_0.png" /> 1<br />' });
var format_38_Mercoledi_05_30_13_06_35 = new ol.format.GeoJSON();
var features_38_Mercoledi_05_30_13_06_35 = format_38_Mercoledi_05_30_13_06_35.readFeatures(json_38_Mercoledi_05_30_13_06_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Mercoledi_05_30_13_06_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Mercoledi_05_30_13_06_35.addFeatures(features_38_Mercoledi_05_30_13_06_35);
var lyr_38_Mercoledi_05_30_13_06_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Mercoledi_05_30_13_06_35, 
                style: style_38_Mercoledi_05_30_13_06_35,
                popuplayertitle: '38_Mercoledi_05_30_13_06',
                interactive: true,
    title: '38_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_0.png" /> 1<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_1.png" /> 2<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_2.png" /> 3<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_3.png" /> 4<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_4.png" /> 5<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_5.png" /> 6<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_6.png" /> 7<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_7.png" /> 8<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_8.png" /> 9<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_9.png" /> 10<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_10.png" /> 11<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_11.png" /> 12<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_12.png" /> 13<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_13.png" /> 14<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_14.png" /> 15<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_15.png" /> 16<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_16.png" /> 17<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_17.png" /> 18<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_18.png" /> 19<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_19.png" /> 20<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_20.png" /> 21<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_35_21.png" /> 22<br />' });
var format_39_Mercoledi_13_07_20_43_36 = new ol.format.GeoJSON();
var features_39_Mercoledi_13_07_20_43_36 = format_39_Mercoledi_13_07_20_43_36.readFeatures(json_39_Mercoledi_13_07_20_43_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Mercoledi_13_07_20_43_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Mercoledi_13_07_20_43_36.addFeatures(features_39_Mercoledi_13_07_20_43_36);
var lyr_39_Mercoledi_13_07_20_43_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Mercoledi_13_07_20_43_36, 
                style: style_39_Mercoledi_13_07_20_43_36,
                popuplayertitle: '39_Mercoledi_13_07_20_43',
                interactive: true,
    title: '39_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_0.png" /> 1<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_1.png" /> 2<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_2.png" /> 3<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_3.png" /> 4<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_4.png" /> 5<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_5.png" /> 6<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_6.png" /> 7<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_7.png" /> 8<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_8.png" /> 9<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_9.png" /> 10<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_10.png" /> 11<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_11.png" /> 12<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_36_12.png" /> 13<br />' });
var format_551_Mercoledi_16_00_23_30_37 = new ol.format.GeoJSON();
var features_551_Mercoledi_16_00_23_30_37 = format_551_Mercoledi_16_00_23_30_37.readFeatures(json_551_Mercoledi_16_00_23_30_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Mercoledi_16_00_23_30_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Mercoledi_16_00_23_30_37.addFeatures(features_551_Mercoledi_16_00_23_30_37);
var lyr_551_Mercoledi_16_00_23_30_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Mercoledi_16_00_23_30_37, 
                style: style_551_Mercoledi_16_00_23_30_37,
                popuplayertitle: '551_Mercoledi_16_00_23_30',
                interactive: true,
    title: '551_Mercoledi_16_00_23_30<br />\
    <img src="styles/legend/551_Mercoledi_16_00_23_30_37_0.png" /> 1<br />' });
var format_671_Mercoledi_10_00_16_00_38 = new ol.format.GeoJSON();
var features_671_Mercoledi_10_00_16_00_38 = format_671_Mercoledi_10_00_16_00_38.readFeatures(json_671_Mercoledi_10_00_16_00_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Mercoledi_10_00_16_00_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Mercoledi_10_00_16_00_38.addFeatures(features_671_Mercoledi_10_00_16_00_38);
var lyr_671_Mercoledi_10_00_16_00_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Mercoledi_10_00_16_00_38, 
                style: style_671_Mercoledi_10_00_16_00_38,
                popuplayertitle: '671_Mercoledi_10_00_16_00',
                interactive: true,
    title: '671_Mercoledi_10_00_16_00<br />\
    <img src="styles/legend/671_Mercoledi_10_00_16_00_38_0.png" /> 1<br />' });
var format_33_Martedi_09_30_15_50_39 = new ol.format.GeoJSON();
var features_33_Martedi_09_30_15_50_39 = format_33_Martedi_09_30_15_50_39.readFeatures(json_33_Martedi_09_30_15_50_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Martedi_09_30_15_50_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Martedi_09_30_15_50_39.addFeatures(features_33_Martedi_09_30_15_50_39);
var lyr_33_Martedi_09_30_15_50_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Martedi_09_30_15_50_39, 
                style: style_33_Martedi_09_30_15_50_39,
                popuplayertitle: '33_Martedi_09_30_15_50',
                interactive: true,
    title: '33_Martedi_09_30_15_50<br />\
    <img src="styles/legend/33_Martedi_09_30_15_50_39_0.png" /> 1<br />' });
var format_34_Martedi_21_50_05_26_40 = new ol.format.GeoJSON();
var features_34_Martedi_21_50_05_26_40 = format_34_Martedi_21_50_05_26_40.readFeatures(json_34_Martedi_21_50_05_26_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Martedi_21_50_05_26_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Martedi_21_50_05_26_40.addFeatures(features_34_Martedi_21_50_05_26_40);
var lyr_34_Martedi_21_50_05_26_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Martedi_21_50_05_26_40, 
                style: style_34_Martedi_21_50_05_26_40,
                popuplayertitle: '34_Martedi_21_50_05_26',
                interactive: true,
    title: '34_Martedi_21_50_05_26<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_40_0.png" /> 1<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_40_1.png" /> 2<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_40_2.png" /> 3<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_40_3.png" /> 4<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_40_4.png" /> 5<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_40_5.png" /> 6<br />' });
var format_37_Martedi_19_00_02_36_41 = new ol.format.GeoJSON();
var features_37_Martedi_19_00_02_36_41 = format_37_Martedi_19_00_02_36_41.readFeatures(json_37_Martedi_19_00_02_36_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Martedi_19_00_02_36_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Martedi_19_00_02_36_41.addFeatures(features_37_Martedi_19_00_02_36_41);
var lyr_37_Martedi_19_00_02_36_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Martedi_19_00_02_36_41, 
                style: style_37_Martedi_19_00_02_36_41,
                popuplayertitle: '37_Martedi_19_00_02_36',
                interactive: true,
    title: '37_Martedi_19_00_02_36<br />\
    <img src="styles/legend/37_Martedi_19_00_02_36_41_0.png" /> 1<br />' });
var format_38_Martedi_05_30_13_06_42 = new ol.format.GeoJSON();
var features_38_Martedi_05_30_13_06_42 = format_38_Martedi_05_30_13_06_42.readFeatures(json_38_Martedi_05_30_13_06_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Martedi_05_30_13_06_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Martedi_05_30_13_06_42.addFeatures(features_38_Martedi_05_30_13_06_42);
var lyr_38_Martedi_05_30_13_06_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Martedi_05_30_13_06_42, 
                style: style_38_Martedi_05_30_13_06_42,
                popuplayertitle: '38_Martedi_05_30_13_06',
                interactive: true,
    title: '38_Martedi_05_30_13_06<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_0.png" /> 1<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_1.png" /> 2<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_2.png" /> 3<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_3.png" /> 4<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_4.png" /> 5<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_5.png" /> 6<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_6.png" /> 7<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_7.png" /> 8<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_8.png" /> 9<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_9.png" /> 10<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_10.png" /> 11<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_11.png" /> 12<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_12.png" /> 13<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_13.png" /> 14<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_14.png" /> 15<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_15.png" /> 16<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_16.png" /> 17<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_17.png" /> 18<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_18.png" /> 19<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_19.png" /> 20<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_20.png" /> 21<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_42_21.png" /> 22<br />' });
var format_39_Martedi_13_07_20_43_43 = new ol.format.GeoJSON();
var features_39_Martedi_13_07_20_43_43 = format_39_Martedi_13_07_20_43_43.readFeatures(json_39_Martedi_13_07_20_43_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Martedi_13_07_20_43_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Martedi_13_07_20_43_43.addFeatures(features_39_Martedi_13_07_20_43_43);
var lyr_39_Martedi_13_07_20_43_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Martedi_13_07_20_43_43, 
                style: style_39_Martedi_13_07_20_43_43,
                popuplayertitle: '39_Martedi_13_07_20_43',
                interactive: true,
    title: '39_Martedi_13_07_20_43<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_0.png" /> 1<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_1.png" /> 2<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_2.png" /> 3<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_3.png" /> 4<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_4.png" /> 5<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_5.png" /> 6<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_6.png" /> 7<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_7.png" /> 8<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_8.png" /> 9<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_9.png" /> 10<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_10.png" /> 11<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_11.png" /> 12<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_43_12.png" /> 13<br />' });
var format_551_Martedi_16_00_23_30_44 = new ol.format.GeoJSON();
var features_551_Martedi_16_00_23_30_44 = format_551_Martedi_16_00_23_30_44.readFeatures(json_551_Martedi_16_00_23_30_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Martedi_16_00_23_30_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Martedi_16_00_23_30_44.addFeatures(features_551_Martedi_16_00_23_30_44);
var lyr_551_Martedi_16_00_23_30_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Martedi_16_00_23_30_44, 
                style: style_551_Martedi_16_00_23_30_44,
                popuplayertitle: '551_Martedi_16_00_23_30',
                interactive: true,
    title: '551_Martedi_16_00_23_30<br />\
    <img src="styles/legend/551_Martedi_16_00_23_30_44_0.png" /> 1<br />' });
var format_671_Martedi_10_00_16_00_45 = new ol.format.GeoJSON();
var features_671_Martedi_10_00_16_00_45 = format_671_Martedi_10_00_16_00_45.readFeatures(json_671_Martedi_10_00_16_00_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Martedi_10_00_16_00_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Martedi_10_00_16_00_45.addFeatures(features_671_Martedi_10_00_16_00_45);
var lyr_671_Martedi_10_00_16_00_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Martedi_10_00_16_00_45, 
                style: style_671_Martedi_10_00_16_00_45,
                popuplayertitle: '671_Martedi_10_00_16_00',
                interactive: true,
    title: '671_Martedi_10_00_16_00<br />\
    <img src="styles/legend/671_Martedi_10_00_16_00_45_0.png" /> 1<br />' });
var format_33_Lunedi_09_30_15_50_46 = new ol.format.GeoJSON();
var features_33_Lunedi_09_30_15_50_46 = format_33_Lunedi_09_30_15_50_46.readFeatures(json_33_Lunedi_09_30_15_50_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Lunedi_09_30_15_50_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Lunedi_09_30_15_50_46.addFeatures(features_33_Lunedi_09_30_15_50_46);
var lyr_33_Lunedi_09_30_15_50_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Lunedi_09_30_15_50_46, 
                style: style_33_Lunedi_09_30_15_50_46,
                popuplayertitle: '33_Lunedi_09_30_15_50',
                interactive: true,
    title: '33_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/33_Lunedi_09_30_15_50_46_0.png" /> 1<br />' });
var format_34_Lunedi_21_50_05_26_47 = new ol.format.GeoJSON();
var features_34_Lunedi_21_50_05_26_47 = format_34_Lunedi_21_50_05_26_47.readFeatures(json_34_Lunedi_21_50_05_26_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Lunedi_21_50_05_26_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Lunedi_21_50_05_26_47.addFeatures(features_34_Lunedi_21_50_05_26_47);
var lyr_34_Lunedi_21_50_05_26_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Lunedi_21_50_05_26_47, 
                style: style_34_Lunedi_21_50_05_26_47,
                popuplayertitle: '34_Lunedi_21_50_05_26',
                interactive: true,
    title: '34_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_47_0.png" /> 1<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_47_1.png" /> 2<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_47_2.png" /> 3<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_47_3.png" /> 4<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_47_4.png" /> 5<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_47_5.png" /> 6<br />' });
var format_37_Lunedi_19_00_02_36_48 = new ol.format.GeoJSON();
var features_37_Lunedi_19_00_02_36_48 = format_37_Lunedi_19_00_02_36_48.readFeatures(json_37_Lunedi_19_00_02_36_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Lunedi_19_00_02_36_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Lunedi_19_00_02_36_48.addFeatures(features_37_Lunedi_19_00_02_36_48);
var lyr_37_Lunedi_19_00_02_36_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Lunedi_19_00_02_36_48, 
                style: style_37_Lunedi_19_00_02_36_48,
                popuplayertitle: '37_Lunedi_19_00_02_36',
                interactive: true,
    title: '37_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/37_Lunedi_19_00_02_36_48_0.png" /> 1<br />' });
var format_38_Lunedi_05_30_13_06_49 = new ol.format.GeoJSON();
var features_38_Lunedi_05_30_13_06_49 = format_38_Lunedi_05_30_13_06_49.readFeatures(json_38_Lunedi_05_30_13_06_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Lunedi_05_30_13_06_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Lunedi_05_30_13_06_49.addFeatures(features_38_Lunedi_05_30_13_06_49);
var lyr_38_Lunedi_05_30_13_06_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Lunedi_05_30_13_06_49, 
                style: style_38_Lunedi_05_30_13_06_49,
                popuplayertitle: '38_Lunedi_05_30_13_06',
                interactive: true,
    title: '38_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_0.png" /> 1<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_1.png" /> 2<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_2.png" /> 3<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_3.png" /> 4<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_4.png" /> 5<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_5.png" /> 6<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_6.png" /> 7<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_7.png" /> 8<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_8.png" /> 9<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_9.png" /> 10<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_10.png" /> 11<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_11.png" /> 12<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_12.png" /> 13<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_13.png" /> 14<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_14.png" /> 15<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_15.png" /> 16<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_16.png" /> 17<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_17.png" /> 18<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_18.png" /> 19<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_19.png" /> 20<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_20.png" /> 21<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_49_21.png" /> 22<br />' });
var format_39_Lunedi_13_07_20_43_50 = new ol.format.GeoJSON();
var features_39_Lunedi_13_07_20_43_50 = format_39_Lunedi_13_07_20_43_50.readFeatures(json_39_Lunedi_13_07_20_43_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Lunedi_13_07_20_43_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Lunedi_13_07_20_43_50.addFeatures(features_39_Lunedi_13_07_20_43_50);
var lyr_39_Lunedi_13_07_20_43_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Lunedi_13_07_20_43_50, 
                style: style_39_Lunedi_13_07_20_43_50,
                popuplayertitle: '39_Lunedi_13_07_20_43',
                interactive: true,
    title: '39_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_0.png" /> 1<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_1.png" /> 2<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_2.png" /> 3<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_3.png" /> 4<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_4.png" /> 5<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_5.png" /> 6<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_6.png" /> 7<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_7.png" /> 8<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_8.png" /> 9<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_9.png" /> 10<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_10.png" /> 11<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_11.png" /> 12<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_50_12.png" /> 13<br />' });
var format_551_Lunedi_16_00_23_30_51 = new ol.format.GeoJSON();
var features_551_Lunedi_16_00_23_30_51 = format_551_Lunedi_16_00_23_30_51.readFeatures(json_551_Lunedi_16_00_23_30_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Lunedi_16_00_23_30_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Lunedi_16_00_23_30_51.addFeatures(features_551_Lunedi_16_00_23_30_51);
var lyr_551_Lunedi_16_00_23_30_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Lunedi_16_00_23_30_51, 
                style: style_551_Lunedi_16_00_23_30_51,
                popuplayertitle: '551_Lunedi_16_00_23_30',
                interactive: true,
    title: '551_Lunedi_16_00_23_30<br />\
    <img src="styles/legend/551_Lunedi_16_00_23_30_51_0.png" /> 1<br />' });
var format_671_Lunedi_10_00_16_00_52 = new ol.format.GeoJSON();
var features_671_Lunedi_10_00_16_00_52 = format_671_Lunedi_10_00_16_00_52.readFeatures(json_671_Lunedi_10_00_16_00_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Lunedi_10_00_16_00_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Lunedi_10_00_16_00_52.addFeatures(features_671_Lunedi_10_00_16_00_52);
var lyr_671_Lunedi_10_00_16_00_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Lunedi_10_00_16_00_52, 
                style: style_671_Lunedi_10_00_16_00_52,
                popuplayertitle: '671_Lunedi_10_00_16_00',
                interactive: true,
    title: '671_Lunedi_10_00_16_00<br />\
    <img src="styles/legend/671_Lunedi_10_00_16_00_52_0.png" /> 1<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_33_Lunedi_09_30_15_50_46,lyr_34_Lunedi_21_50_05_26_47,lyr_37_Lunedi_19_00_02_36_48,lyr_38_Lunedi_05_30_13_06_49,lyr_39_Lunedi_13_07_20_43_50,lyr_551_Lunedi_16_00_23_30_51,lyr_671_Lunedi_10_00_16_00_52,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_33_Martedi_09_30_15_50_39,lyr_34_Martedi_21_50_05_26_40,lyr_37_Martedi_19_00_02_36_41,lyr_38_Martedi_05_30_13_06_42,lyr_39_Martedi_13_07_20_43_43,lyr_551_Martedi_16_00_23_30_44,lyr_671_Martedi_10_00_16_00_45,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_33_Mercoledi_09_30_15_50_33,lyr_37_Mercoledi_19_00_02_36_34,lyr_38_Mercoledi_05_30_13_06_35,lyr_39_Mercoledi_13_07_20_43_36,lyr_551_Mercoledi_16_00_23_30_37,lyr_671_Mercoledi_10_00_16_00_38,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_33_Giovedi_09_30_15_50_26,lyr_34_Giovedi_21_50_05_26_27,lyr_37_Giovedi_19_00_02_36_28,lyr_38_Giovedi_05_30_13_06_29,lyr_39_Giovedi_13_07_20_43_30,lyr_551_Giovedi_16_00_23_30_31,lyr_671_Giovedi_10_00_16_00_32,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_33_Venerdi_09_30_15_50_18,lyr_34_Venerdi_21_50_05_26_19,lyr_37_Venerdi_19_00_02_36_20,lyr_38_Venerdi_05_30_13_06_21,lyr_39_Venerdi_13_07_20_43_22,lyr_551_Venerdi_16_00_23_30_23,lyr_669_Venerdi_13_00_19_00_24,lyr_671_Venerdi_10_00_16_00_25,],
                                fold: 'close',
                                title: 'Venerdi'});
var group_Sabato = new ol.layer.Group({
                                layers: [lyr_33_Sabato_09_30_15_50_10,lyr_34_Sabato_21_50_05_26_11,lyr_37_Sabato_19_00_02_36_12,lyr_38_Sabato_05_30_13_06_13,lyr_39_Sabato_13_07_20_43_14,lyr_551_Sabato_16_00_23_30_15,lyr_669_Sabato_13_00_19_00_16,lyr_671_Sabato_10_00_16_00_17,],
                                fold: 'close',
                                title: 'Sabato'});
var group_Domenica = new ol.layer.Group({
                                layers: [lyr_33_Domenica_09_30_15_50_1,lyr_34_Domenica_21_50_05_26_2,lyr_34_Mercoledi_21_50_05_26_3,lyr_37_Domenica_19_00_02_36_4,lyr_38_Domenica_05_30_13_06_5,lyr_39_Domenica_13_07_20_43_6,lyr_551_Domenica_16_00_23_30_7,lyr_669_Domenica_13_00_19_00_8,lyr_671_Domenica_10_00_16_00_9,],
                                fold: 'close',
                                title: 'Domenica'});

lyr_Mappa_web_0.setVisible(true);lyr_33_Domenica_09_30_15_50_1.setVisible(false);lyr_34_Domenica_21_50_05_26_2.setVisible(false);lyr_34_Mercoledi_21_50_05_26_3.setVisible(false);lyr_37_Domenica_19_00_02_36_4.setVisible(false);lyr_38_Domenica_05_30_13_06_5.setVisible(false);lyr_39_Domenica_13_07_20_43_6.setVisible(false);lyr_551_Domenica_16_00_23_30_7.setVisible(false);lyr_669_Domenica_13_00_19_00_8.setVisible(false);lyr_671_Domenica_10_00_16_00_9.setVisible(false);lyr_33_Sabato_09_30_15_50_10.setVisible(false);lyr_34_Sabato_21_50_05_26_11.setVisible(false);lyr_37_Sabato_19_00_02_36_12.setVisible(false);lyr_38_Sabato_05_30_13_06_13.setVisible(false);lyr_39_Sabato_13_07_20_43_14.setVisible(false);lyr_551_Sabato_16_00_23_30_15.setVisible(false);lyr_669_Sabato_13_00_19_00_16.setVisible(false);lyr_671_Sabato_10_00_16_00_17.setVisible(false);lyr_33_Venerdi_09_30_15_50_18.setVisible(false);lyr_34_Venerdi_21_50_05_26_19.setVisible(false);lyr_37_Venerdi_19_00_02_36_20.setVisible(false);lyr_38_Venerdi_05_30_13_06_21.setVisible(false);lyr_39_Venerdi_13_07_20_43_22.setVisible(false);lyr_551_Venerdi_16_00_23_30_23.setVisible(false);lyr_669_Venerdi_13_00_19_00_24.setVisible(false);lyr_671_Venerdi_10_00_16_00_25.setVisible(false);lyr_33_Giovedi_09_30_15_50_26.setVisible(false);lyr_34_Giovedi_21_50_05_26_27.setVisible(false);lyr_37_Giovedi_19_00_02_36_28.setVisible(false);lyr_38_Giovedi_05_30_13_06_29.setVisible(false);lyr_39_Giovedi_13_07_20_43_30.setVisible(false);lyr_551_Giovedi_16_00_23_30_31.setVisible(false);lyr_671_Giovedi_10_00_16_00_32.setVisible(false);lyr_33_Mercoledi_09_30_15_50_33.setVisible(false);lyr_37_Mercoledi_19_00_02_36_34.setVisible(false);lyr_38_Mercoledi_05_30_13_06_35.setVisible(false);lyr_39_Mercoledi_13_07_20_43_36.setVisible(false);lyr_551_Mercoledi_16_00_23_30_37.setVisible(false);lyr_671_Mercoledi_10_00_16_00_38.setVisible(false);lyr_33_Martedi_09_30_15_50_39.setVisible(false);lyr_34_Martedi_21_50_05_26_40.setVisible(false);lyr_37_Martedi_19_00_02_36_41.setVisible(false);lyr_38_Martedi_05_30_13_06_42.setVisible(false);lyr_39_Martedi_13_07_20_43_43.setVisible(false);lyr_551_Martedi_16_00_23_30_44.setVisible(false);lyr_671_Martedi_10_00_16_00_45.setVisible(false);lyr_33_Lunedi_09_30_15_50_46.setVisible(false);lyr_34_Lunedi_21_50_05_26_47.setVisible(false);lyr_37_Lunedi_19_00_02_36_48.setVisible(false);lyr_38_Lunedi_05_30_13_06_49.setVisible(false);lyr_39_Lunedi_13_07_20_43_50.setVisible(true);lyr_551_Lunedi_16_00_23_30_51.setVisible(false);lyr_671_Lunedi_10_00_16_00_52.setVisible(false);
var layersList = [lyr_Mappa_web_0,group_Domenica,group_Sabato,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_33_Domenica_09_30_15_50_1.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_34_Domenica_21_50_05_26_2.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_34_Mercoledi_21_50_05_26_3.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_37_Domenica_19_00_02_36_4.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_38_Domenica_05_30_13_06_5.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_39_Domenica_13_07_20_43_6.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_551_Domenica_16_00_23_30_7.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_669_Domenica_13_00_19_00_8.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_671_Domenica_10_00_16_00_9.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_33_Sabato_09_30_15_50_10.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_34_Sabato_21_50_05_26_11.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_37_Sabato_19_00_02_36_12.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_38_Sabato_05_30_13_06_13.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_39_Sabato_13_07_20_43_14.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_551_Sabato_16_00_23_30_15.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_669_Sabato_13_00_19_00_16.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_671_Sabato_10_00_16_00_17.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_33_Venerdi_09_30_15_50_18.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_34_Venerdi_21_50_05_26_19.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_37_Venerdi_19_00_02_36_20.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_38_Venerdi_05_30_13_06_21.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_39_Venerdi_13_07_20_43_22.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_551_Venerdi_16_00_23_30_23.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_669_Venerdi_13_00_19_00_24.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_671_Venerdi_10_00_16_00_25.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_33_Giovedi_09_30_15_50_26.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_34_Giovedi_21_50_05_26_27.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_37_Giovedi_19_00_02_36_28.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_38_Giovedi_05_30_13_06_29.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_39_Giovedi_13_07_20_43_30.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_551_Giovedi_16_00_23_30_31.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_671_Giovedi_10_00_16_00_32.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_33_Mercoledi_09_30_15_50_33.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_37_Mercoledi_19_00_02_36_34.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_38_Mercoledi_05_30_13_06_35.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_39_Mercoledi_13_07_20_43_36.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_551_Mercoledi_16_00_23_30_37.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_671_Mercoledi_10_00_16_00_38.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_33_Martedi_09_30_15_50_39.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_34_Martedi_21_50_05_26_40.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_37_Martedi_19_00_02_36_41.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_38_Martedi_05_30_13_06_42.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_39_Martedi_13_07_20_43_43.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_551_Martedi_16_00_23_30_44.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_671_Martedi_10_00_16_00_45.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_33_Lunedi_09_30_15_50_46.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_34_Lunedi_21_50_05_26_47.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_37_Lunedi_19_00_02_36_48.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_38_Lunedi_05_30_13_06_49.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_39_Lunedi_13_07_20_43_50.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_551_Lunedi_16_00_23_30_51.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_671_Lunedi_10_00_16_00_52.set('fieldAliases', {'Cesto_AMSA': 'Cesto_AMSA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_33_Domenica_09_30_15_50_1.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_34_Domenica_21_50_05_26_2.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_34_Mercoledi_21_50_05_26_3.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_37_Domenica_19_00_02_36_4.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_38_Domenica_05_30_13_06_5.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_39_Domenica_13_07_20_43_6.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_551_Domenica_16_00_23_30_7.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_669_Domenica_13_00_19_00_8.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_671_Domenica_10_00_16_00_9.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_33_Sabato_09_30_15_50_10.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_34_Sabato_21_50_05_26_11.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_37_Sabato_19_00_02_36_12.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_38_Sabato_05_30_13_06_13.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_39_Sabato_13_07_20_43_14.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_551_Sabato_16_00_23_30_15.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_669_Sabato_13_00_19_00_16.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_671_Sabato_10_00_16_00_17.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_33_Venerdi_09_30_15_50_18.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_34_Venerdi_21_50_05_26_19.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_37_Venerdi_19_00_02_36_20.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_38_Venerdi_05_30_13_06_21.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_39_Venerdi_13_07_20_43_22.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_551_Venerdi_16_00_23_30_23.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_669_Venerdi_13_00_19_00_24.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_671_Venerdi_10_00_16_00_25.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_33_Giovedi_09_30_15_50_26.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_34_Giovedi_21_50_05_26_27.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_37_Giovedi_19_00_02_36_28.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_38_Giovedi_05_30_13_06_29.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_39_Giovedi_13_07_20_43_30.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_551_Giovedi_16_00_23_30_31.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_671_Giovedi_10_00_16_00_32.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_33_Mercoledi_09_30_15_50_33.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_37_Mercoledi_19_00_02_36_34.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_38_Mercoledi_05_30_13_06_35.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_39_Mercoledi_13_07_20_43_36.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_551_Mercoledi_16_00_23_30_37.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_671_Mercoledi_10_00_16_00_38.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_33_Martedi_09_30_15_50_39.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_34_Martedi_21_50_05_26_40.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_37_Martedi_19_00_02_36_41.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_38_Martedi_05_30_13_06_42.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_39_Martedi_13_07_20_43_43.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_551_Martedi_16_00_23_30_44.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_671_Martedi_10_00_16_00_45.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_33_Lunedi_09_30_15_50_46.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_34_Lunedi_21_50_05_26_47.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_37_Lunedi_19_00_02_36_48.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_38_Lunedi_05_30_13_06_49.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_39_Lunedi_13_07_20_43_50.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_551_Lunedi_16_00_23_30_51.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_671_Lunedi_10_00_16_00_52.set('fieldImages', {'Cesto_AMSA': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_33_Domenica_09_30_15_50_1.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Domenica_21_50_05_26_2.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Mercoledi_21_50_05_26_3.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Domenica_19_00_02_36_4.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Domenica_05_30_13_06_5.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Domenica_13_07_20_43_6.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_551_Domenica_16_00_23_30_7.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_669_Domenica_13_00_19_00_8.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_671_Domenica_10_00_16_00_9.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Sabato_09_30_15_50_10.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Sabato_21_50_05_26_11.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Sabato_19_00_02_36_12.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Sabato_05_30_13_06_13.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Sabato_13_07_20_43_14.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_551_Sabato_16_00_23_30_15.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_669_Sabato_13_00_19_00_16.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_671_Sabato_10_00_16_00_17.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Venerdi_09_30_15_50_18.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Venerdi_21_50_05_26_19.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Venerdi_19_00_02_36_20.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Venerdi_05_30_13_06_21.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Venerdi_13_07_20_43_22.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_551_Venerdi_16_00_23_30_23.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_669_Venerdi_13_00_19_00_24.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_671_Venerdi_10_00_16_00_25.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Giovedi_09_30_15_50_26.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Giovedi_21_50_05_26_27.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Giovedi_19_00_02_36_28.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Giovedi_05_30_13_06_29.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Giovedi_13_07_20_43_30.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_551_Giovedi_16_00_23_30_31.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_671_Giovedi_10_00_16_00_32.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Mercoledi_09_30_15_50_33.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Mercoledi_19_00_02_36_34.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Mercoledi_05_30_13_06_35.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Mercoledi_13_07_20_43_36.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_551_Mercoledi_16_00_23_30_37.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_671_Mercoledi_10_00_16_00_38.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Martedi_09_30_15_50_39.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Martedi_21_50_05_26_40.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Martedi_19_00_02_36_41.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Martedi_05_30_13_06_42.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Martedi_13_07_20_43_43.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_551_Martedi_16_00_23_30_44.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_671_Martedi_10_00_16_00_45.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Lunedi_09_30_15_50_46.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Lunedi_21_50_05_26_47.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Lunedi_19_00_02_36_48.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Lunedi_05_30_13_06_49.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Lunedi_13_07_20_43_50.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_551_Lunedi_16_00_23_30_51.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_671_Lunedi_10_00_16_00_52.set('fieldLabels', {'Cesto_AMSA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_671_Lunedi_10_00_16_00_52.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});