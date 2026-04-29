var wms_layers = [];


        var lyr_Mappa_web_Fra_0 = new ol.layer.Tile({
            'title': 'Mappa_web_Fra',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_671_Domenica_10_00_16_00_1 = new ol.format.GeoJSON();
var features_671_Domenica_10_00_16_00_1 = format_671_Domenica_10_00_16_00_1.readFeatures(json_671_Domenica_10_00_16_00_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Domenica_10_00_16_00_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Domenica_10_00_16_00_1.addFeatures(features_671_Domenica_10_00_16_00_1);
var lyr_671_Domenica_10_00_16_00_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Domenica_10_00_16_00_1, 
                style: style_671_Domenica_10_00_16_00_1,
                popuplayertitle: '671_Domenica_10_00_16_00',
                interactive: true,
    title: '671_Domenica_10_00_16_00<br />\
    <img src="styles/legend/671_Domenica_10_00_16_00_1_0.png" /> 1<br />' });
var format_669_Domenica_13_00_19_00_2 = new ol.format.GeoJSON();
var features_669_Domenica_13_00_19_00_2 = format_669_Domenica_13_00_19_00_2.readFeatures(json_669_Domenica_13_00_19_00_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_669_Domenica_13_00_19_00_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_669_Domenica_13_00_19_00_2.addFeatures(features_669_Domenica_13_00_19_00_2);
var lyr_669_Domenica_13_00_19_00_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_669_Domenica_13_00_19_00_2, 
                style: style_669_Domenica_13_00_19_00_2,
                popuplayertitle: '669_Domenica_13_00_19_00',
                interactive: true,
    title: '669_Domenica_13_00_19_00<br />\
    <img src="styles/legend/669_Domenica_13_00_19_00_2_0.png" /> 1<br />' });
var format_551_Domenica_16_00_23_30_3 = new ol.format.GeoJSON();
var features_551_Domenica_16_00_23_30_3 = format_551_Domenica_16_00_23_30_3.readFeatures(json_551_Domenica_16_00_23_30_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Domenica_16_00_23_30_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Domenica_16_00_23_30_3.addFeatures(features_551_Domenica_16_00_23_30_3);
var lyr_551_Domenica_16_00_23_30_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Domenica_16_00_23_30_3, 
                style: style_551_Domenica_16_00_23_30_3,
                popuplayertitle: '551_Domenica_16_00_23_30',
                interactive: true,
    title: '551_Domenica_16_00_23_30<br />\
    <img src="styles/legend/551_Domenica_16_00_23_30_3_0.png" /> 1<br />' });
var format_39_Domenica_13_07_20_43_4 = new ol.format.GeoJSON();
var features_39_Domenica_13_07_20_43_4 = format_39_Domenica_13_07_20_43_4.readFeatures(json_39_Domenica_13_07_20_43_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Domenica_13_07_20_43_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Domenica_13_07_20_43_4.addFeatures(features_39_Domenica_13_07_20_43_4);
var lyr_39_Domenica_13_07_20_43_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Domenica_13_07_20_43_4, 
                style: style_39_Domenica_13_07_20_43_4,
                popuplayertitle: '39_Domenica_13_07_20_43',
                interactive: true,
    title: '39_Domenica_13_07_20_43<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_0.png" /> 1<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_1.png" /> 2<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_2.png" /> 3<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_3.png" /> 4<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_4.png" /> 5<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_5.png" /> 6<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_6.png" /> 7<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_7.png" /> 8<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_8.png" /> 9<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_9.png" /> 10<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_10.png" /> 11<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_11.png" /> 12<br />\
    <img src="styles/legend/39_Domenica_13_07_20_43_4_12.png" /> 13<br />' });
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
var format_37_Domenica_19_00_02_36_6 = new ol.format.GeoJSON();
var features_37_Domenica_19_00_02_36_6 = format_37_Domenica_19_00_02_36_6.readFeatures(json_37_Domenica_19_00_02_36_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Domenica_19_00_02_36_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Domenica_19_00_02_36_6.addFeatures(features_37_Domenica_19_00_02_36_6);
var lyr_37_Domenica_19_00_02_36_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Domenica_19_00_02_36_6, 
                style: style_37_Domenica_19_00_02_36_6,
                popuplayertitle: '37_Domenica_19_00_02_36',
                interactive: true,
    title: '37_Domenica_19_00_02_36<br />\
    <img src="styles/legend/37_Domenica_19_00_02_36_6_0.png" /> 1<br />' });
var format_34_Domenica_21_50_05_26_7 = new ol.format.GeoJSON();
var features_34_Domenica_21_50_05_26_7 = format_34_Domenica_21_50_05_26_7.readFeatures(json_34_Domenica_21_50_05_26_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Domenica_21_50_05_26_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Domenica_21_50_05_26_7.addFeatures(features_34_Domenica_21_50_05_26_7);
var lyr_34_Domenica_21_50_05_26_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Domenica_21_50_05_26_7, 
                style: style_34_Domenica_21_50_05_26_7,
                popuplayertitle: '34_Domenica_21_50_05_26',
                interactive: true,
    title: '34_Domenica_21_50_05_26<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_7_0.png" /> 1<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_7_1.png" /> 2<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_7_2.png" /> 3<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_7_3.png" /> 4<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_7_4.png" /> 5<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_7_5.png" /> 6<br />' });
var format_33_Domenica_09_30_15_50_8 = new ol.format.GeoJSON();
var features_33_Domenica_09_30_15_50_8 = format_33_Domenica_09_30_15_50_8.readFeatures(json_33_Domenica_09_30_15_50_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Domenica_09_30_15_50_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Domenica_09_30_15_50_8.addFeatures(features_33_Domenica_09_30_15_50_8);
var lyr_33_Domenica_09_30_15_50_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Domenica_09_30_15_50_8, 
                style: style_33_Domenica_09_30_15_50_8,
                popuplayertitle: '33_Domenica_09_30_15_50',
                interactive: true,
    title: '33_Domenica_09_30_15_50<br />\
    <img src="styles/legend/33_Domenica_09_30_15_50_8_0.png" /> 1<br />' });
var format_671_Sabato_10_00_16_00_9 = new ol.format.GeoJSON();
var features_671_Sabato_10_00_16_00_9 = format_671_Sabato_10_00_16_00_9.readFeatures(json_671_Sabato_10_00_16_00_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Sabato_10_00_16_00_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Sabato_10_00_16_00_9.addFeatures(features_671_Sabato_10_00_16_00_9);
var lyr_671_Sabato_10_00_16_00_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Sabato_10_00_16_00_9, 
                style: style_671_Sabato_10_00_16_00_9,
                popuplayertitle: '671_Sabato_10_00_16_00',
                interactive: true,
    title: '671_Sabato_10_00_16_00<br />\
    <img src="styles/legend/671_Sabato_10_00_16_00_9_0.png" /> 1<br />' });
var format_669_Sabato_13_00_19_00_10 = new ol.format.GeoJSON();
var features_669_Sabato_13_00_19_00_10 = format_669_Sabato_13_00_19_00_10.readFeatures(json_669_Sabato_13_00_19_00_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_669_Sabato_13_00_19_00_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_669_Sabato_13_00_19_00_10.addFeatures(features_669_Sabato_13_00_19_00_10);
var lyr_669_Sabato_13_00_19_00_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_669_Sabato_13_00_19_00_10, 
                style: style_669_Sabato_13_00_19_00_10,
                popuplayertitle: '669_Sabato_13_00_19_00',
                interactive: true,
    title: '669_Sabato_13_00_19_00<br />\
    <img src="styles/legend/669_Sabato_13_00_19_00_10_0.png" /> 1<br />' });
var format_551_Sabato_16_00_23_30_11 = new ol.format.GeoJSON();
var features_551_Sabato_16_00_23_30_11 = format_551_Sabato_16_00_23_30_11.readFeatures(json_551_Sabato_16_00_23_30_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Sabato_16_00_23_30_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Sabato_16_00_23_30_11.addFeatures(features_551_Sabato_16_00_23_30_11);
var lyr_551_Sabato_16_00_23_30_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Sabato_16_00_23_30_11, 
                style: style_551_Sabato_16_00_23_30_11,
                popuplayertitle: '551_Sabato_16_00_23_30',
                interactive: true,
    title: '551_Sabato_16_00_23_30<br />\
    <img src="styles/legend/551_Sabato_16_00_23_30_11_0.png" /> 1<br />' });
var format_39_Sabato_13_07_20_43_12 = new ol.format.GeoJSON();
var features_39_Sabato_13_07_20_43_12 = format_39_Sabato_13_07_20_43_12.readFeatures(json_39_Sabato_13_07_20_43_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Sabato_13_07_20_43_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Sabato_13_07_20_43_12.addFeatures(features_39_Sabato_13_07_20_43_12);
var lyr_39_Sabato_13_07_20_43_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Sabato_13_07_20_43_12, 
                style: style_39_Sabato_13_07_20_43_12,
                popuplayertitle: '39_Sabato_13_07_20_43',
                interactive: true,
    title: '39_Sabato_13_07_20_43<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_0.png" /> 1<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_1.png" /> 2<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_2.png" /> 3<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_3.png" /> 4<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_4.png" /> 5<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_5.png" /> 6<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_6.png" /> 7<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_7.png" /> 8<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_8.png" /> 9<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_9.png" /> 10<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_10.png" /> 11<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_11.png" /> 12<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_12_12.png" /> 13<br />' });
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
var format_37_Sabato_19_00_02_36_14 = new ol.format.GeoJSON();
var features_37_Sabato_19_00_02_36_14 = format_37_Sabato_19_00_02_36_14.readFeatures(json_37_Sabato_19_00_02_36_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Sabato_19_00_02_36_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Sabato_19_00_02_36_14.addFeatures(features_37_Sabato_19_00_02_36_14);
var lyr_37_Sabato_19_00_02_36_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Sabato_19_00_02_36_14, 
                style: style_37_Sabato_19_00_02_36_14,
                popuplayertitle: '37_Sabato_19_00_02_36',
                interactive: true,
    title: '37_Sabato_19_00_02_36<br />\
    <img src="styles/legend/37_Sabato_19_00_02_36_14_0.png" /> 1<br />' });
var format_34_Sabato_21_50_05_26_15 = new ol.format.GeoJSON();
var features_34_Sabato_21_50_05_26_15 = format_34_Sabato_21_50_05_26_15.readFeatures(json_34_Sabato_21_50_05_26_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Sabato_21_50_05_26_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Sabato_21_50_05_26_15.addFeatures(features_34_Sabato_21_50_05_26_15);
var lyr_34_Sabato_21_50_05_26_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Sabato_21_50_05_26_15, 
                style: style_34_Sabato_21_50_05_26_15,
                popuplayertitle: '34_Sabato_21_50_05_26',
                interactive: true,
    title: '34_Sabato_21_50_05_26<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_15_0.png" /> 1<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_15_1.png" /> 2<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_15_2.png" /> 3<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_15_3.png" /> 4<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_15_4.png" /> 5<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_15_5.png" /> 6<br />' });
var format_33_Sabato_09_30_15_50_16 = new ol.format.GeoJSON();
var features_33_Sabato_09_30_15_50_16 = format_33_Sabato_09_30_15_50_16.readFeatures(json_33_Sabato_09_30_15_50_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Sabato_09_30_15_50_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Sabato_09_30_15_50_16.addFeatures(features_33_Sabato_09_30_15_50_16);
var lyr_33_Sabato_09_30_15_50_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Sabato_09_30_15_50_16, 
                style: style_33_Sabato_09_30_15_50_16,
                popuplayertitle: '33_Sabato_09_30_15_50',
                interactive: true,
    title: '33_Sabato_09_30_15_50<br />\
    <img src="styles/legend/33_Sabato_09_30_15_50_16_0.png" /> 1<br />' });
var format_671_Venerdi_10_00_16_00_17 = new ol.format.GeoJSON();
var features_671_Venerdi_10_00_16_00_17 = format_671_Venerdi_10_00_16_00_17.readFeatures(json_671_Venerdi_10_00_16_00_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Venerdi_10_00_16_00_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Venerdi_10_00_16_00_17.addFeatures(features_671_Venerdi_10_00_16_00_17);
var lyr_671_Venerdi_10_00_16_00_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Venerdi_10_00_16_00_17, 
                style: style_671_Venerdi_10_00_16_00_17,
                popuplayertitle: '671_Venerdi_10_00_16_00',
                interactive: true,
    title: '671_Venerdi_10_00_16_00<br />\
    <img src="styles/legend/671_Venerdi_10_00_16_00_17_0.png" /> 1<br />' });
var format_669_Venerdi_13_00_19_00_18 = new ol.format.GeoJSON();
var features_669_Venerdi_13_00_19_00_18 = format_669_Venerdi_13_00_19_00_18.readFeatures(json_669_Venerdi_13_00_19_00_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_669_Venerdi_13_00_19_00_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_669_Venerdi_13_00_19_00_18.addFeatures(features_669_Venerdi_13_00_19_00_18);
var lyr_669_Venerdi_13_00_19_00_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_669_Venerdi_13_00_19_00_18, 
                style: style_669_Venerdi_13_00_19_00_18,
                popuplayertitle: '669_Venerdi_13_00_19_00',
                interactive: true,
    title: '669_Venerdi_13_00_19_00<br />\
    <img src="styles/legend/669_Venerdi_13_00_19_00_18_0.png" /> 1<br />' });
var format_551_Venerdi_16_00_23_30_19 = new ol.format.GeoJSON();
var features_551_Venerdi_16_00_23_30_19 = format_551_Venerdi_16_00_23_30_19.readFeatures(json_551_Venerdi_16_00_23_30_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Venerdi_16_00_23_30_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Venerdi_16_00_23_30_19.addFeatures(features_551_Venerdi_16_00_23_30_19);
var lyr_551_Venerdi_16_00_23_30_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Venerdi_16_00_23_30_19, 
                style: style_551_Venerdi_16_00_23_30_19,
                popuplayertitle: '551_Venerdi_16_00_23_30',
                interactive: true,
    title: '551_Venerdi_16_00_23_30<br />\
    <img src="styles/legend/551_Venerdi_16_00_23_30_19_0.png" /> 1<br />' });
var format_39_Venerdi_13_07_20_43_20 = new ol.format.GeoJSON();
var features_39_Venerdi_13_07_20_43_20 = format_39_Venerdi_13_07_20_43_20.readFeatures(json_39_Venerdi_13_07_20_43_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Venerdi_13_07_20_43_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Venerdi_13_07_20_43_20.addFeatures(features_39_Venerdi_13_07_20_43_20);
var lyr_39_Venerdi_13_07_20_43_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Venerdi_13_07_20_43_20, 
                style: style_39_Venerdi_13_07_20_43_20,
                popuplayertitle: '39_Venerdi_13_07_20_43',
                interactive: true,
    title: '39_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_0.png" /> 1<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_1.png" /> 2<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_2.png" /> 3<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_3.png" /> 4<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_4.png" /> 5<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_5.png" /> 6<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_6.png" /> 7<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_7.png" /> 8<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_8.png" /> 9<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_9.png" /> 10<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_10.png" /> 11<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_11.png" /> 12<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_20_12.png" /> 13<br />' });
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
var format_37_Venerdi_19_00_02_36_22 = new ol.format.GeoJSON();
var features_37_Venerdi_19_00_02_36_22 = format_37_Venerdi_19_00_02_36_22.readFeatures(json_37_Venerdi_19_00_02_36_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Venerdi_19_00_02_36_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Venerdi_19_00_02_36_22.addFeatures(features_37_Venerdi_19_00_02_36_22);
var lyr_37_Venerdi_19_00_02_36_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Venerdi_19_00_02_36_22, 
                style: style_37_Venerdi_19_00_02_36_22,
                popuplayertitle: '37_Venerdi_19_00_02_36',
                interactive: true,
    title: '37_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/37_Venerdi_19_00_02_36_22_0.png" /> 1<br />' });
var format_34_Venerdi_21_50_05_26_23 = new ol.format.GeoJSON();
var features_34_Venerdi_21_50_05_26_23 = format_34_Venerdi_21_50_05_26_23.readFeatures(json_34_Venerdi_21_50_05_26_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Venerdi_21_50_05_26_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Venerdi_21_50_05_26_23.addFeatures(features_34_Venerdi_21_50_05_26_23);
var lyr_34_Venerdi_21_50_05_26_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Venerdi_21_50_05_26_23, 
                style: style_34_Venerdi_21_50_05_26_23,
                popuplayertitle: '34_Venerdi_21_50_05_26',
                interactive: true,
    title: '34_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_23_0.png" /> 1<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_23_1.png" /> 2<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_23_2.png" /> 3<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_23_3.png" /> 4<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_23_4.png" /> 5<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_23_5.png" /> 6<br />' });
var format_33_Venerdi_09_30_15_50_24 = new ol.format.GeoJSON();
var features_33_Venerdi_09_30_15_50_24 = format_33_Venerdi_09_30_15_50_24.readFeatures(json_33_Venerdi_09_30_15_50_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Venerdi_09_30_15_50_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Venerdi_09_30_15_50_24.addFeatures(features_33_Venerdi_09_30_15_50_24);
var lyr_33_Venerdi_09_30_15_50_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Venerdi_09_30_15_50_24, 
                style: style_33_Venerdi_09_30_15_50_24,
                popuplayertitle: '33_Venerdi_09_30_15_50',
                interactive: true,
    title: '33_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/33_Venerdi_09_30_15_50_24_0.png" /> 1<br />' });
var format_671_Giovedi_10_00_16_00_25 = new ol.format.GeoJSON();
var features_671_Giovedi_10_00_16_00_25 = format_671_Giovedi_10_00_16_00_25.readFeatures(json_671_Giovedi_10_00_16_00_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Giovedi_10_00_16_00_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Giovedi_10_00_16_00_25.addFeatures(features_671_Giovedi_10_00_16_00_25);
var lyr_671_Giovedi_10_00_16_00_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Giovedi_10_00_16_00_25, 
                style: style_671_Giovedi_10_00_16_00_25,
                popuplayertitle: '671_Giovedi_10_00_16_00',
                interactive: true,
    title: '671_Giovedi_10_00_16_00<br />\
    <img src="styles/legend/671_Giovedi_10_00_16_00_25_0.png" /> 1<br />' });
var format_551_Giovedi_16_00_23_30_26 = new ol.format.GeoJSON();
var features_551_Giovedi_16_00_23_30_26 = format_551_Giovedi_16_00_23_30_26.readFeatures(json_551_Giovedi_16_00_23_30_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Giovedi_16_00_23_30_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Giovedi_16_00_23_30_26.addFeatures(features_551_Giovedi_16_00_23_30_26);
var lyr_551_Giovedi_16_00_23_30_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Giovedi_16_00_23_30_26, 
                style: style_551_Giovedi_16_00_23_30_26,
                popuplayertitle: '551_Giovedi_16_00_23_30',
                interactive: true,
    title: '551_Giovedi_16_00_23_30<br />\
    <img src="styles/legend/551_Giovedi_16_00_23_30_26_0.png" /> 1<br />' });
var format_39_Giovedi_13_07_20_43_27 = new ol.format.GeoJSON();
var features_39_Giovedi_13_07_20_43_27 = format_39_Giovedi_13_07_20_43_27.readFeatures(json_39_Giovedi_13_07_20_43_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Giovedi_13_07_20_43_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Giovedi_13_07_20_43_27.addFeatures(features_39_Giovedi_13_07_20_43_27);
var lyr_39_Giovedi_13_07_20_43_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Giovedi_13_07_20_43_27, 
                style: style_39_Giovedi_13_07_20_43_27,
                popuplayertitle: '39_Giovedi_13_07_20_43',
                interactive: true,
    title: '39_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_0.png" /> 1<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_1.png" /> 2<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_2.png" /> 3<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_3.png" /> 4<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_4.png" /> 5<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_5.png" /> 6<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_6.png" /> 7<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_7.png" /> 8<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_8.png" /> 9<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_9.png" /> 10<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_10.png" /> 11<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_11.png" /> 12<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_27_12.png" /> 13<br />' });
var format_38_Giovedi_05_30_13_06_28 = new ol.format.GeoJSON();
var features_38_Giovedi_05_30_13_06_28 = format_38_Giovedi_05_30_13_06_28.readFeatures(json_38_Giovedi_05_30_13_06_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Giovedi_05_30_13_06_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Giovedi_05_30_13_06_28.addFeatures(features_38_Giovedi_05_30_13_06_28);
var lyr_38_Giovedi_05_30_13_06_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Giovedi_05_30_13_06_28, 
                style: style_38_Giovedi_05_30_13_06_28,
                popuplayertitle: '38_Giovedi_05_30_13_06',
                interactive: true,
    title: '38_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_0.png" /> 1<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_1.png" /> 2<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_2.png" /> 3<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_3.png" /> 4<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_4.png" /> 5<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_5.png" /> 6<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_6.png" /> 7<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_7.png" /> 8<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_8.png" /> 9<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_9.png" /> 10<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_10.png" /> 11<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_11.png" /> 12<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_12.png" /> 13<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_13.png" /> 14<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_14.png" /> 15<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_15.png" /> 16<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_16.png" /> 17<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_17.png" /> 18<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_18.png" /> 19<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_19.png" /> 20<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_20.png" /> 21<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_28_21.png" /> 22<br />' });
var format_37_Giovedi_19_00_02_36_29 = new ol.format.GeoJSON();
var features_37_Giovedi_19_00_02_36_29 = format_37_Giovedi_19_00_02_36_29.readFeatures(json_37_Giovedi_19_00_02_36_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Giovedi_19_00_02_36_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Giovedi_19_00_02_36_29.addFeatures(features_37_Giovedi_19_00_02_36_29);
var lyr_37_Giovedi_19_00_02_36_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Giovedi_19_00_02_36_29, 
                style: style_37_Giovedi_19_00_02_36_29,
                popuplayertitle: '37_Giovedi_19_00_02_36',
                interactive: true,
    title: '37_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/37_Giovedi_19_00_02_36_29_0.png" /> 1<br />' });
var format_34_Giovedi_21_50_05_26_30 = new ol.format.GeoJSON();
var features_34_Giovedi_21_50_05_26_30 = format_34_Giovedi_21_50_05_26_30.readFeatures(json_34_Giovedi_21_50_05_26_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Giovedi_21_50_05_26_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Giovedi_21_50_05_26_30.addFeatures(features_34_Giovedi_21_50_05_26_30);
var lyr_34_Giovedi_21_50_05_26_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Giovedi_21_50_05_26_30, 
                style: style_34_Giovedi_21_50_05_26_30,
                popuplayertitle: '34_Giovedi_21_50_05_26',
                interactive: true,
    title: '34_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_30_0.png" /> 1<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_30_1.png" /> 2<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_30_2.png" /> 3<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_30_3.png" /> 4<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_30_4.png" /> 5<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_30_5.png" /> 6<br />' });
var format_33_Giovedi_09_30_15_50_31 = new ol.format.GeoJSON();
var features_33_Giovedi_09_30_15_50_31 = format_33_Giovedi_09_30_15_50_31.readFeatures(json_33_Giovedi_09_30_15_50_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Giovedi_09_30_15_50_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Giovedi_09_30_15_50_31.addFeatures(features_33_Giovedi_09_30_15_50_31);
var lyr_33_Giovedi_09_30_15_50_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Giovedi_09_30_15_50_31, 
                style: style_33_Giovedi_09_30_15_50_31,
                popuplayertitle: '33_Giovedi_09_30_15_50',
                interactive: true,
    title: '33_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/33_Giovedi_09_30_15_50_31_0.png" /> 1<br />' });
var format_671_Mercoledi_10_00_16_00_32 = new ol.format.GeoJSON();
var features_671_Mercoledi_10_00_16_00_32 = format_671_Mercoledi_10_00_16_00_32.readFeatures(json_671_Mercoledi_10_00_16_00_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Mercoledi_10_00_16_00_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Mercoledi_10_00_16_00_32.addFeatures(features_671_Mercoledi_10_00_16_00_32);
var lyr_671_Mercoledi_10_00_16_00_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Mercoledi_10_00_16_00_32, 
                style: style_671_Mercoledi_10_00_16_00_32,
                popuplayertitle: '671_Mercoledi_10_00_16_00',
                interactive: true,
    title: '671_Mercoledi_10_00_16_00<br />\
    <img src="styles/legend/671_Mercoledi_10_00_16_00_32_0.png" /> 1<br />' });
var format_551_Mercoledi_16_00_23_30_33 = new ol.format.GeoJSON();
var features_551_Mercoledi_16_00_23_30_33 = format_551_Mercoledi_16_00_23_30_33.readFeatures(json_551_Mercoledi_16_00_23_30_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Mercoledi_16_00_23_30_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Mercoledi_16_00_23_30_33.addFeatures(features_551_Mercoledi_16_00_23_30_33);
var lyr_551_Mercoledi_16_00_23_30_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Mercoledi_16_00_23_30_33, 
                style: style_551_Mercoledi_16_00_23_30_33,
                popuplayertitle: '551_Mercoledi_16_00_23_30',
                interactive: true,
    title: '551_Mercoledi_16_00_23_30<br />\
    <img src="styles/legend/551_Mercoledi_16_00_23_30_33_0.png" /> 1<br />' });
var format_39_Mercoledi_13_07_20_43_34 = new ol.format.GeoJSON();
var features_39_Mercoledi_13_07_20_43_34 = format_39_Mercoledi_13_07_20_43_34.readFeatures(json_39_Mercoledi_13_07_20_43_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Mercoledi_13_07_20_43_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Mercoledi_13_07_20_43_34.addFeatures(features_39_Mercoledi_13_07_20_43_34);
var lyr_39_Mercoledi_13_07_20_43_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Mercoledi_13_07_20_43_34, 
                style: style_39_Mercoledi_13_07_20_43_34,
                popuplayertitle: '39_Mercoledi_13_07_20_43',
                interactive: true,
    title: '39_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_0.png" /> 1<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_1.png" /> 2<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_2.png" /> 3<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_3.png" /> 4<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_4.png" /> 5<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_5.png" /> 6<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_6.png" /> 7<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_7.png" /> 8<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_8.png" /> 9<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_9.png" /> 10<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_10.png" /> 11<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_11.png" /> 12<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_34_12.png" /> 13<br />' });
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
var format_37_Mercoledi_19_00_02_36_36 = new ol.format.GeoJSON();
var features_37_Mercoledi_19_00_02_36_36 = format_37_Mercoledi_19_00_02_36_36.readFeatures(json_37_Mercoledi_19_00_02_36_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Mercoledi_19_00_02_36_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Mercoledi_19_00_02_36_36.addFeatures(features_37_Mercoledi_19_00_02_36_36);
var lyr_37_Mercoledi_19_00_02_36_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Mercoledi_19_00_02_36_36, 
                style: style_37_Mercoledi_19_00_02_36_36,
                popuplayertitle: '37_Mercoledi_19_00_02_36',
                interactive: true,
    title: '37_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/37_Mercoledi_19_00_02_36_36_0.png" /> 1<br />' });
var format_34_Mercoledi_21_50_05_26_37 = new ol.format.GeoJSON();
var features_34_Mercoledi_21_50_05_26_37 = format_34_Mercoledi_21_50_05_26_37.readFeatures(json_34_Mercoledi_21_50_05_26_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Mercoledi_21_50_05_26_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Mercoledi_21_50_05_26_37.addFeatures(features_34_Mercoledi_21_50_05_26_37);
var lyr_34_Mercoledi_21_50_05_26_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Mercoledi_21_50_05_26_37, 
                style: style_34_Mercoledi_21_50_05_26_37,
                popuplayertitle: '34_Mercoledi_21_50_05_26',
                interactive: true,
    title: '34_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_37_0.png" /> 1<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_37_1.png" /> 2<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_37_2.png" /> 3<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_37_3.png" /> 4<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_37_4.png" /> 5<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_37_5.png" /> 6<br />' });
var format_33_Mercoledi_09_30_15_50_38 = new ol.format.GeoJSON();
var features_33_Mercoledi_09_30_15_50_38 = format_33_Mercoledi_09_30_15_50_38.readFeatures(json_33_Mercoledi_09_30_15_50_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Mercoledi_09_30_15_50_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Mercoledi_09_30_15_50_38.addFeatures(features_33_Mercoledi_09_30_15_50_38);
var lyr_33_Mercoledi_09_30_15_50_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Mercoledi_09_30_15_50_38, 
                style: style_33_Mercoledi_09_30_15_50_38,
                popuplayertitle: '33_Mercoledi_09_30_15_50',
                interactive: true,
    title: '33_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/33_Mercoledi_09_30_15_50_38_0.png" /> 1<br />' });
var format_671_Martedi_10_00_16_00_39 = new ol.format.GeoJSON();
var features_671_Martedi_10_00_16_00_39 = format_671_Martedi_10_00_16_00_39.readFeatures(json_671_Martedi_10_00_16_00_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Martedi_10_00_16_00_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Martedi_10_00_16_00_39.addFeatures(features_671_Martedi_10_00_16_00_39);
var lyr_671_Martedi_10_00_16_00_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Martedi_10_00_16_00_39, 
                style: style_671_Martedi_10_00_16_00_39,
                popuplayertitle: '671_Martedi_10_00_16_00',
                interactive: true,
    title: '671_Martedi_10_00_16_00<br />\
    <img src="styles/legend/671_Martedi_10_00_16_00_39_0.png" /> 1<br />' });
var format_551_Martedi_16_00_23_30_40 = new ol.format.GeoJSON();
var features_551_Martedi_16_00_23_30_40 = format_551_Martedi_16_00_23_30_40.readFeatures(json_551_Martedi_16_00_23_30_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Martedi_16_00_23_30_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Martedi_16_00_23_30_40.addFeatures(features_551_Martedi_16_00_23_30_40);
var lyr_551_Martedi_16_00_23_30_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Martedi_16_00_23_30_40, 
                style: style_551_Martedi_16_00_23_30_40,
                popuplayertitle: '551_Martedi_16_00_23_30',
                interactive: true,
    title: '551_Martedi_16_00_23_30<br />\
    <img src="styles/legend/551_Martedi_16_00_23_30_40_0.png" /> 1<br />' });
var format_39_Martedi_13_07_20_43_41 = new ol.format.GeoJSON();
var features_39_Martedi_13_07_20_43_41 = format_39_Martedi_13_07_20_43_41.readFeatures(json_39_Martedi_13_07_20_43_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Martedi_13_07_20_43_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Martedi_13_07_20_43_41.addFeatures(features_39_Martedi_13_07_20_43_41);
var lyr_39_Martedi_13_07_20_43_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Martedi_13_07_20_43_41, 
                style: style_39_Martedi_13_07_20_43_41,
                popuplayertitle: '39_Martedi_13_07_20_43',
                interactive: true,
    title: '39_Martedi_13_07_20_43<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_0.png" /> 1<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_1.png" /> 2<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_2.png" /> 3<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_3.png" /> 4<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_4.png" /> 5<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_5.png" /> 6<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_6.png" /> 7<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_7.png" /> 8<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_8.png" /> 9<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_9.png" /> 10<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_10.png" /> 11<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_11.png" /> 12<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_41_12.png" /> 13<br />' });
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
var format_37_Martedi_19_00_02_36_43 = new ol.format.GeoJSON();
var features_37_Martedi_19_00_02_36_43 = format_37_Martedi_19_00_02_36_43.readFeatures(json_37_Martedi_19_00_02_36_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Martedi_19_00_02_36_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Martedi_19_00_02_36_43.addFeatures(features_37_Martedi_19_00_02_36_43);
var lyr_37_Martedi_19_00_02_36_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Martedi_19_00_02_36_43, 
                style: style_37_Martedi_19_00_02_36_43,
                popuplayertitle: '37_Martedi_19_00_02_36',
                interactive: true,
    title: '37_Martedi_19_00_02_36<br />\
    <img src="styles/legend/37_Martedi_19_00_02_36_43_0.png" /> 1<br />' });
var format_34_Martedi_21_50_05_26_44 = new ol.format.GeoJSON();
var features_34_Martedi_21_50_05_26_44 = format_34_Martedi_21_50_05_26_44.readFeatures(json_34_Martedi_21_50_05_26_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Martedi_21_50_05_26_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Martedi_21_50_05_26_44.addFeatures(features_34_Martedi_21_50_05_26_44);
var lyr_34_Martedi_21_50_05_26_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Martedi_21_50_05_26_44, 
                style: style_34_Martedi_21_50_05_26_44,
                popuplayertitle: '34_Martedi_21_50_05_26',
                interactive: true,
    title: '34_Martedi_21_50_05_26<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_44_0.png" /> 1<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_44_1.png" /> 2<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_44_2.png" /> 3<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_44_3.png" /> 4<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_44_4.png" /> 5<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_44_5.png" /> 6<br />' });
var format_33_Martedi_09_30_15_50_45 = new ol.format.GeoJSON();
var features_33_Martedi_09_30_15_50_45 = format_33_Martedi_09_30_15_50_45.readFeatures(json_33_Martedi_09_30_15_50_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Martedi_09_30_15_50_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Martedi_09_30_15_50_45.addFeatures(features_33_Martedi_09_30_15_50_45);
var lyr_33_Martedi_09_30_15_50_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Martedi_09_30_15_50_45, 
                style: style_33_Martedi_09_30_15_50_45,
                popuplayertitle: '33_Martedi_09_30_15_50',
                interactive: true,
    title: '33_Martedi_09_30_15_50<br />\
    <img src="styles/legend/33_Martedi_09_30_15_50_45_0.png" /> 1<br />' });
var format_671_Lunedi_10_00_16_00_46 = new ol.format.GeoJSON();
var features_671_Lunedi_10_00_16_00_46 = format_671_Lunedi_10_00_16_00_46.readFeatures(json_671_Lunedi_10_00_16_00_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_671_Lunedi_10_00_16_00_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_671_Lunedi_10_00_16_00_46.addFeatures(features_671_Lunedi_10_00_16_00_46);
var lyr_671_Lunedi_10_00_16_00_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_671_Lunedi_10_00_16_00_46, 
                style: style_671_Lunedi_10_00_16_00_46,
                popuplayertitle: '671_Lunedi_10_00_16_00',
                interactive: true,
    title: '671_Lunedi_10_00_16_00<br />\
    <img src="styles/legend/671_Lunedi_10_00_16_00_46_0.png" /> 1<br />' });
var format_551_Lunedi_16_00_23_30_47 = new ol.format.GeoJSON();
var features_551_Lunedi_16_00_23_30_47 = format_551_Lunedi_16_00_23_30_47.readFeatures(json_551_Lunedi_16_00_23_30_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_551_Lunedi_16_00_23_30_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_551_Lunedi_16_00_23_30_47.addFeatures(features_551_Lunedi_16_00_23_30_47);
var lyr_551_Lunedi_16_00_23_30_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_551_Lunedi_16_00_23_30_47, 
                style: style_551_Lunedi_16_00_23_30_47,
                popuplayertitle: '551_Lunedi_16_00_23_30',
                interactive: true,
    title: '551_Lunedi_16_00_23_30<br />\
    <img src="styles/legend/551_Lunedi_16_00_23_30_47_0.png" /> 1<br />' });
var format_39_Lunedi_13_07_20_43_48 = new ol.format.GeoJSON();
var features_39_Lunedi_13_07_20_43_48 = format_39_Lunedi_13_07_20_43_48.readFeatures(json_39_Lunedi_13_07_20_43_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Lunedi_13_07_20_43_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Lunedi_13_07_20_43_48.addFeatures(features_39_Lunedi_13_07_20_43_48);
var lyr_39_Lunedi_13_07_20_43_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Lunedi_13_07_20_43_48, 
                style: style_39_Lunedi_13_07_20_43_48,
                popuplayertitle: '39_Lunedi_13_07_20_43',
                interactive: true,
    title: '39_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_0.png" /> 1<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_1.png" /> 2<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_2.png" /> 3<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_3.png" /> 4<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_4.png" /> 5<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_5.png" /> 6<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_6.png" /> 7<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_7.png" /> 8<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_8.png" /> 9<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_9.png" /> 10<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_10.png" /> 11<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_11.png" /> 12<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_48_12.png" /> 13<br />' });
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
var format_37_Lunedi_19_00_02_36_50 = new ol.format.GeoJSON();
var features_37_Lunedi_19_00_02_36_50 = format_37_Lunedi_19_00_02_36_50.readFeatures(json_37_Lunedi_19_00_02_36_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Lunedi_19_00_02_36_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Lunedi_19_00_02_36_50.addFeatures(features_37_Lunedi_19_00_02_36_50);
var lyr_37_Lunedi_19_00_02_36_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Lunedi_19_00_02_36_50, 
                style: style_37_Lunedi_19_00_02_36_50,
                popuplayertitle: '37_Lunedi_19_00_02_36',
                interactive: true,
    title: '37_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/37_Lunedi_19_00_02_36_50_0.png" /> 1<br />' });
var format_34_Lunedi_21_50_05_26_51 = new ol.format.GeoJSON();
var features_34_Lunedi_21_50_05_26_51 = format_34_Lunedi_21_50_05_26_51.readFeatures(json_34_Lunedi_21_50_05_26_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Lunedi_21_50_05_26_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Lunedi_21_50_05_26_51.addFeatures(features_34_Lunedi_21_50_05_26_51);
var lyr_34_Lunedi_21_50_05_26_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Lunedi_21_50_05_26_51, 
                style: style_34_Lunedi_21_50_05_26_51,
                popuplayertitle: '34_Lunedi_21_50_05_26',
                interactive: true,
    title: '34_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_51_0.png" /> 1<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_51_1.png" /> 2<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_51_2.png" /> 3<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_51_3.png" /> 4<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_51_4.png" /> 5<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_51_5.png" /> 6<br />' });
var format_33_Lunedi_09_30_15_50_52 = new ol.format.GeoJSON();
var features_33_Lunedi_09_30_15_50_52 = format_33_Lunedi_09_30_15_50_52.readFeatures(json_33_Lunedi_09_30_15_50_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Lunedi_09_30_15_50_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Lunedi_09_30_15_50_52.addFeatures(features_33_Lunedi_09_30_15_50_52);
var lyr_33_Lunedi_09_30_15_50_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Lunedi_09_30_15_50_52, 
                style: style_33_Lunedi_09_30_15_50_52,
                popuplayertitle: '33_Lunedi_09_30_15_50',
                interactive: true,
    title: '33_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/33_Lunedi_09_30_15_50_52_0.png" /> 1<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_671_Lunedi_10_00_16_00_46,lyr_551_Lunedi_16_00_23_30_47,lyr_39_Lunedi_13_07_20_43_48,lyr_38_Lunedi_05_30_13_06_49,lyr_37_Lunedi_19_00_02_36_50,lyr_34_Lunedi_21_50_05_26_51,lyr_33_Lunedi_09_30_15_50_52,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_671_Martedi_10_00_16_00_39,lyr_551_Martedi_16_00_23_30_40,lyr_39_Martedi_13_07_20_43_41,lyr_38_Martedi_05_30_13_06_42,lyr_37_Martedi_19_00_02_36_43,lyr_34_Martedi_21_50_05_26_44,lyr_33_Martedi_09_30_15_50_45,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_671_Mercoledi_10_00_16_00_32,lyr_551_Mercoledi_16_00_23_30_33,lyr_39_Mercoledi_13_07_20_43_34,lyr_38_Mercoledi_05_30_13_06_35,lyr_37_Mercoledi_19_00_02_36_36,lyr_34_Mercoledi_21_50_05_26_37,lyr_33_Mercoledi_09_30_15_50_38,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_671_Giovedi_10_00_16_00_25,lyr_551_Giovedi_16_00_23_30_26,lyr_39_Giovedi_13_07_20_43_27,lyr_38_Giovedi_05_30_13_06_28,lyr_37_Giovedi_19_00_02_36_29,lyr_34_Giovedi_21_50_05_26_30,lyr_33_Giovedi_09_30_15_50_31,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_671_Venerdi_10_00_16_00_17,lyr_669_Venerdi_13_00_19_00_18,lyr_551_Venerdi_16_00_23_30_19,lyr_39_Venerdi_13_07_20_43_20,lyr_38_Venerdi_05_30_13_06_21,lyr_37_Venerdi_19_00_02_36_22,lyr_34_Venerdi_21_50_05_26_23,lyr_33_Venerdi_09_30_15_50_24,],
                                fold: 'close',
                                title: 'Venerdi'});
var group_Sabato = new ol.layer.Group({
                                layers: [lyr_671_Sabato_10_00_16_00_9,lyr_669_Sabato_13_00_19_00_10,lyr_551_Sabato_16_00_23_30_11,lyr_39_Sabato_13_07_20_43_12,lyr_38_Sabato_05_30_13_06_13,lyr_37_Sabato_19_00_02_36_14,lyr_34_Sabato_21_50_05_26_15,lyr_33_Sabato_09_30_15_50_16,],
                                fold: 'close',
                                title: 'Sabato'});
var group_Domenica = new ol.layer.Group({
                                layers: [lyr_671_Domenica_10_00_16_00_1,lyr_669_Domenica_13_00_19_00_2,lyr_551_Domenica_16_00_23_30_3,lyr_39_Domenica_13_07_20_43_4,lyr_38_Domenica_05_30_13_06_5,lyr_37_Domenica_19_00_02_36_6,lyr_34_Domenica_21_50_05_26_7,lyr_33_Domenica_09_30_15_50_8,],
                                fold: 'close',
                                title: 'Domenica'});

lyr_Mappa_web_Fra_0.setVisible(true);lyr_671_Domenica_10_00_16_00_1.setVisible(false);lyr_669_Domenica_13_00_19_00_2.setVisible(false);lyr_551_Domenica_16_00_23_30_3.setVisible(false);lyr_39_Domenica_13_07_20_43_4.setVisible(false);lyr_38_Domenica_05_30_13_06_5.setVisible(false);lyr_37_Domenica_19_00_02_36_6.setVisible(false);lyr_34_Domenica_21_50_05_26_7.setVisible(false);lyr_33_Domenica_09_30_15_50_8.setVisible(false);lyr_671_Sabato_10_00_16_00_9.setVisible(false);lyr_669_Sabato_13_00_19_00_10.setVisible(false);lyr_551_Sabato_16_00_23_30_11.setVisible(false);lyr_39_Sabato_13_07_20_43_12.setVisible(false);lyr_38_Sabato_05_30_13_06_13.setVisible(false);lyr_37_Sabato_19_00_02_36_14.setVisible(false);lyr_34_Sabato_21_50_05_26_15.setVisible(false);lyr_33_Sabato_09_30_15_50_16.setVisible(false);lyr_671_Venerdi_10_00_16_00_17.setVisible(false);lyr_669_Venerdi_13_00_19_00_18.setVisible(false);lyr_551_Venerdi_16_00_23_30_19.setVisible(false);lyr_39_Venerdi_13_07_20_43_20.setVisible(false);lyr_38_Venerdi_05_30_13_06_21.setVisible(false);lyr_37_Venerdi_19_00_02_36_22.setVisible(false);lyr_34_Venerdi_21_50_05_26_23.setVisible(false);lyr_33_Venerdi_09_30_15_50_24.setVisible(false);lyr_671_Giovedi_10_00_16_00_25.setVisible(false);lyr_551_Giovedi_16_00_23_30_26.setVisible(false);lyr_39_Giovedi_13_07_20_43_27.setVisible(false);lyr_38_Giovedi_05_30_13_06_28.setVisible(false);lyr_37_Giovedi_19_00_02_36_29.setVisible(false);lyr_34_Giovedi_21_50_05_26_30.setVisible(false);lyr_33_Giovedi_09_30_15_50_31.setVisible(false);lyr_671_Mercoledi_10_00_16_00_32.setVisible(false);lyr_551_Mercoledi_16_00_23_30_33.setVisible(false);lyr_39_Mercoledi_13_07_20_43_34.setVisible(false);lyr_38_Mercoledi_05_30_13_06_35.setVisible(false);lyr_37_Mercoledi_19_00_02_36_36.setVisible(false);lyr_34_Mercoledi_21_50_05_26_37.setVisible(false);lyr_33_Mercoledi_09_30_15_50_38.setVisible(false);lyr_671_Martedi_10_00_16_00_39.setVisible(false);lyr_551_Martedi_16_00_23_30_40.setVisible(false);lyr_39_Martedi_13_07_20_43_41.setVisible(false);lyr_38_Martedi_05_30_13_06_42.setVisible(false);lyr_37_Martedi_19_00_02_36_43.setVisible(false);lyr_34_Martedi_21_50_05_26_44.setVisible(false);lyr_33_Martedi_09_30_15_50_45.setVisible(false);lyr_671_Lunedi_10_00_16_00_46.setVisible(false);lyr_551_Lunedi_16_00_23_30_47.setVisible(false);lyr_39_Lunedi_13_07_20_43_48.setVisible(true);lyr_38_Lunedi_05_30_13_06_49.setVisible(false);lyr_37_Lunedi_19_00_02_36_50.setVisible(false);lyr_34_Lunedi_21_50_05_26_51.setVisible(false);lyr_33_Lunedi_09_30_15_50_52.setVisible(false);
var layersList = [lyr_Mappa_web_Fra_0,group_Domenica,group_Sabato,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_671_Domenica_10_00_16_00_1.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_669_Domenica_13_00_19_00_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_551_Domenica_16_00_23_30_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Domenica_13_07_20_43_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Domenica_05_30_13_06_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Domenica_19_00_02_36_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Domenica_21_50_05_26_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Domenica_09_30_15_50_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_671_Sabato_10_00_16_00_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_669_Sabato_13_00_19_00_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_551_Sabato_16_00_23_30_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Sabato_13_07_20_43_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Sabato_05_30_13_06_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Sabato_19_00_02_36_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Sabato_21_50_05_26_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Sabato_09_30_15_50_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_671_Venerdi_10_00_16_00_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_669_Venerdi_13_00_19_00_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_551_Venerdi_16_00_23_30_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Venerdi_13_07_20_43_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Venerdi_05_30_13_06_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Venerdi_19_00_02_36_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Venerdi_21_50_05_26_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Venerdi_09_30_15_50_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_671_Giovedi_10_00_16_00_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_551_Giovedi_16_00_23_30_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Giovedi_13_07_20_43_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Giovedi_05_30_13_06_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Giovedi_19_00_02_36_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Giovedi_21_50_05_26_30.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Giovedi_09_30_15_50_31.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_671_Mercoledi_10_00_16_00_32.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_551_Mercoledi_16_00_23_30_33.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Mercoledi_13_07_20_43_34.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Mercoledi_05_30_13_06_35.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Mercoledi_19_00_02_36_36.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Mercoledi_21_50_05_26_37.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Mercoledi_09_30_15_50_38.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_671_Martedi_10_00_16_00_39.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_551_Martedi_16_00_23_30_40.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Martedi_13_07_20_43_41.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Martedi_05_30_13_06_42.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Martedi_19_00_02_36_43.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Martedi_21_50_05_26_44.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Martedi_09_30_15_50_45.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_671_Lunedi_10_00_16_00_46.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_551_Lunedi_16_00_23_30_47.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Lunedi_13_07_20_43_48.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Lunedi_05_30_13_06_49.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Lunedi_19_00_02_36_50.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Lunedi_21_50_05_26_51.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Lunedi_09_30_15_50_52.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'PRG_TRONCO': 'PRG_TRONCO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'tipo_gio_1': 'tipo_gio_1', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_671_Domenica_10_00_16_00_1.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_669_Domenica_13_00_19_00_2.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_551_Domenica_16_00_23_30_3.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Domenica_13_07_20_43_4.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Domenica_05_30_13_06_5.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Domenica_19_00_02_36_6.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Domenica_21_50_05_26_7.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Domenica_09_30_15_50_8.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_671_Sabato_10_00_16_00_9.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_669_Sabato_13_00_19_00_10.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_551_Sabato_16_00_23_30_11.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Sabato_13_07_20_43_12.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Sabato_05_30_13_06_13.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Sabato_19_00_02_36_14.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Sabato_21_50_05_26_15.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Sabato_09_30_15_50_16.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_671_Venerdi_10_00_16_00_17.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_669_Venerdi_13_00_19_00_18.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_551_Venerdi_16_00_23_30_19.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Venerdi_13_07_20_43_20.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Venerdi_05_30_13_06_21.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Venerdi_19_00_02_36_22.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Venerdi_21_50_05_26_23.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Venerdi_09_30_15_50_24.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_671_Giovedi_10_00_16_00_25.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_551_Giovedi_16_00_23_30_26.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Giovedi_13_07_20_43_27.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Giovedi_05_30_13_06_28.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Giovedi_19_00_02_36_29.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Giovedi_21_50_05_26_30.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Giovedi_09_30_15_50_31.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_671_Mercoledi_10_00_16_00_32.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_551_Mercoledi_16_00_23_30_33.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Mercoledi_13_07_20_43_34.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Mercoledi_05_30_13_06_35.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Mercoledi_19_00_02_36_36.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Mercoledi_21_50_05_26_37.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Mercoledi_09_30_15_50_38.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_671_Martedi_10_00_16_00_39.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_551_Martedi_16_00_23_30_40.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Martedi_13_07_20_43_41.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Martedi_05_30_13_06_42.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Martedi_19_00_02_36_43.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Martedi_21_50_05_26_44.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Martedi_09_30_15_50_45.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_671_Lunedi_10_00_16_00_46.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_551_Lunedi_16_00_23_30_47.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Lunedi_13_07_20_43_48.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Lunedi_05_30_13_06_49.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Lunedi_19_00_02_36_50.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Lunedi_21_50_05_26_51.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Lunedi_09_30_15_50_52.set('fieldImages', {'CD_VIARIO': '', 'PRG_TRONCO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'tipo_gio_1': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_671_Domenica_10_00_16_00_1.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_669_Domenica_13_00_19_00_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_551_Domenica_16_00_23_30_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Domenica_13_07_20_43_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Domenica_05_30_13_06_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Domenica_19_00_02_36_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Domenica_21_50_05_26_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Domenica_09_30_15_50_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_671_Sabato_10_00_16_00_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_669_Sabato_13_00_19_00_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_551_Sabato_16_00_23_30_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Sabato_13_07_20_43_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Sabato_05_30_13_06_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Sabato_19_00_02_36_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Sabato_21_50_05_26_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Sabato_09_30_15_50_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_671_Venerdi_10_00_16_00_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_669_Venerdi_13_00_19_00_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_551_Venerdi_16_00_23_30_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Venerdi_13_07_20_43_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Venerdi_05_30_13_06_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Venerdi_19_00_02_36_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Venerdi_21_50_05_26_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Venerdi_09_30_15_50_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_671_Giovedi_10_00_16_00_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_551_Giovedi_16_00_23_30_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Giovedi_13_07_20_43_27.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Giovedi_05_30_13_06_28.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Giovedi_19_00_02_36_29.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Giovedi_21_50_05_26_30.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Giovedi_09_30_15_50_31.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_671_Mercoledi_10_00_16_00_32.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_551_Mercoledi_16_00_23_30_33.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Mercoledi_13_07_20_43_34.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Mercoledi_05_30_13_06_35.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Mercoledi_19_00_02_36_36.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Mercoledi_21_50_05_26_37.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Mercoledi_09_30_15_50_38.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_671_Martedi_10_00_16_00_39.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_551_Martedi_16_00_23_30_40.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Martedi_13_07_20_43_41.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Martedi_05_30_13_06_42.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Martedi_19_00_02_36_43.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Martedi_21_50_05_26_44.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Martedi_09_30_15_50_45.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_671_Lunedi_10_00_16_00_46.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_551_Lunedi_16_00_23_30_47.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Lunedi_13_07_20_43_48.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Lunedi_05_30_13_06_49.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Lunedi_19_00_02_36_50.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Lunedi_21_50_05_26_51.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Lunedi_09_30_15_50_52.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'PRG_TRONCO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'tipo_gio_1': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Lunedi_09_30_15_50_52.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});