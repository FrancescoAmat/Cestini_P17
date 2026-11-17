var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Confini_Comune_Milanodissolto_1 = new ol.format.GeoJSON();
var features_Confini_Comune_Milanodissolto_1 = format_Confini_Comune_Milanodissolto_1.readFeatures(json_Confini_Comune_Milanodissolto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Confini_Comune_Milanodissolto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Confini_Comune_Milanodissolto_1.addFeatures(features_Confini_Comune_Milanodissolto_1);
var lyr_Confini_Comune_Milanodissolto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Confini_Comune_Milanodissolto_1, 
                style: style_Confini_Comune_Milanodissolto_1,
                popuplayertitle: 'Confini_Comune_Milano — dissolto',
                interactive: false,
                title: '<img src="styles/legend/Confini_Comune_Milanodissolto_1.png" /> Confini_Comune_Milano — dissolto'
            });
var format_33_Domenica_09_30_15_50_2 = new ol.format.GeoJSON();
var features_33_Domenica_09_30_15_50_2 = format_33_Domenica_09_30_15_50_2.readFeatures(json_33_Domenica_09_30_15_50_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Domenica_09_30_15_50_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Domenica_09_30_15_50_2.addFeatures(features_33_Domenica_09_30_15_50_2);
var lyr_33_Domenica_09_30_15_50_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Domenica_09_30_15_50_2, 
                style: style_33_Domenica_09_30_15_50_2,
                popuplayertitle: '33_Domenica_09_30_15_50',
                interactive: true,
    title: '33_Domenica_09_30_15_50<br />\
    <img src="styles/legend/33_Domenica_09_30_15_50_2_0.png" /> 1<br />' });
var format_34_Domenica_21_50_05_26_3 = new ol.format.GeoJSON();
var features_34_Domenica_21_50_05_26_3 = format_34_Domenica_21_50_05_26_3.readFeatures(json_34_Domenica_21_50_05_26_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Domenica_21_50_05_26_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Domenica_21_50_05_26_3.addFeatures(features_34_Domenica_21_50_05_26_3);
var lyr_34_Domenica_21_50_05_26_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Domenica_21_50_05_26_3, 
                style: style_34_Domenica_21_50_05_26_3,
                popuplayertitle: '34_Domenica_21_50_05_26',
                interactive: true,
    title: '34_Domenica_21_50_05_26<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_3_0.png" /> 1<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_3_1.png" /> 2<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_3_2.png" /> 3<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_3_3.png" /> 4<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_3_4.png" /> 5<br />\
    <img src="styles/legend/34_Domenica_21_50_05_26_3_5.png" /> 6<br />' });
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
var format_33_Sabato_09_30_15_50_7 = new ol.format.GeoJSON();
var features_33_Sabato_09_30_15_50_7 = format_33_Sabato_09_30_15_50_7.readFeatures(json_33_Sabato_09_30_15_50_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Sabato_09_30_15_50_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Sabato_09_30_15_50_7.addFeatures(features_33_Sabato_09_30_15_50_7);
var lyr_33_Sabato_09_30_15_50_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Sabato_09_30_15_50_7, 
                style: style_33_Sabato_09_30_15_50_7,
                popuplayertitle: '33_Sabato_09_30_15_50',
                interactive: true,
    title: '33_Sabato_09_30_15_50<br />\
    <img src="styles/legend/33_Sabato_09_30_15_50_7_0.png" /> 1<br />' });
var format_34_Sabato_21_50_05_26_8 = new ol.format.GeoJSON();
var features_34_Sabato_21_50_05_26_8 = format_34_Sabato_21_50_05_26_8.readFeatures(json_34_Sabato_21_50_05_26_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Sabato_21_50_05_26_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Sabato_21_50_05_26_8.addFeatures(features_34_Sabato_21_50_05_26_8);
var lyr_34_Sabato_21_50_05_26_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Sabato_21_50_05_26_8, 
                style: style_34_Sabato_21_50_05_26_8,
                popuplayertitle: '34_Sabato_21_50_05_26',
                interactive: true,
    title: '34_Sabato_21_50_05_26<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_8_0.png" /> 1<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_8_1.png" /> 2<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_8_2.png" /> 3<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_8_3.png" /> 4<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_8_4.png" /> 5<br />\
    <img src="styles/legend/34_Sabato_21_50_05_26_8_5.png" /> 6<br />' });
var format_37_Sabato_19_00_02_36_9 = new ol.format.GeoJSON();
var features_37_Sabato_19_00_02_36_9 = format_37_Sabato_19_00_02_36_9.readFeatures(json_37_Sabato_19_00_02_36_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Sabato_19_00_02_36_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Sabato_19_00_02_36_9.addFeatures(features_37_Sabato_19_00_02_36_9);
var lyr_37_Sabato_19_00_02_36_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Sabato_19_00_02_36_9, 
                style: style_37_Sabato_19_00_02_36_9,
                popuplayertitle: '37_Sabato_19_00_02_36',
                interactive: true,
    title: '37_Sabato_19_00_02_36<br />\
    <img src="styles/legend/37_Sabato_19_00_02_36_9_0.png" /> 1<br />' });
var format_38_Sabato_05_30_13_06_10 = new ol.format.GeoJSON();
var features_38_Sabato_05_30_13_06_10 = format_38_Sabato_05_30_13_06_10.readFeatures(json_38_Sabato_05_30_13_06_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Sabato_05_30_13_06_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Sabato_05_30_13_06_10.addFeatures(features_38_Sabato_05_30_13_06_10);
var lyr_38_Sabato_05_30_13_06_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Sabato_05_30_13_06_10, 
                style: style_38_Sabato_05_30_13_06_10,
                popuplayertitle: '38_Sabato_05_30_13_06',
                interactive: true,
    title: '38_Sabato_05_30_13_06<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_0.png" /> 1<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_1.png" /> 2<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_2.png" /> 3<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_3.png" /> 4<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_4.png" /> 5<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_5.png" /> 6<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_6.png" /> 7<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_7.png" /> 8<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_8.png" /> 9<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_9.png" /> 10<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_10.png" /> 11<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_11.png" /> 12<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_12.png" /> 13<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_13.png" /> 14<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_14.png" /> 15<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_15.png" /> 16<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_16.png" /> 17<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_17.png" /> 18<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_18.png" /> 19<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_19.png" /> 20<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_20.png" /> 21<br />\
    <img src="styles/legend/38_Sabato_05_30_13_06_10_21.png" /> 22<br />' });
var format_39_Sabato_13_07_20_43_11 = new ol.format.GeoJSON();
var features_39_Sabato_13_07_20_43_11 = format_39_Sabato_13_07_20_43_11.readFeatures(json_39_Sabato_13_07_20_43_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Sabato_13_07_20_43_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Sabato_13_07_20_43_11.addFeatures(features_39_Sabato_13_07_20_43_11);
var lyr_39_Sabato_13_07_20_43_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Sabato_13_07_20_43_11, 
                style: style_39_Sabato_13_07_20_43_11,
                popuplayertitle: '39_Sabato_13_07_20_43',
                interactive: true,
    title: '39_Sabato_13_07_20_43<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_0.png" /> 1<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_1.png" /> 2<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_2.png" /> 3<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_3.png" /> 4<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_4.png" /> 5<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_5.png" /> 6<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_6.png" /> 7<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_7.png" /> 8<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_8.png" /> 9<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_9.png" /> 10<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_10.png" /> 11<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_11.png" /> 12<br />\
    <img src="styles/legend/39_Sabato_13_07_20_43_11_12.png" /> 13<br />' });
var format_33_Venerdi_09_30_15_50_12 = new ol.format.GeoJSON();
var features_33_Venerdi_09_30_15_50_12 = format_33_Venerdi_09_30_15_50_12.readFeatures(json_33_Venerdi_09_30_15_50_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Venerdi_09_30_15_50_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Venerdi_09_30_15_50_12.addFeatures(features_33_Venerdi_09_30_15_50_12);
var lyr_33_Venerdi_09_30_15_50_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Venerdi_09_30_15_50_12, 
                style: style_33_Venerdi_09_30_15_50_12,
                popuplayertitle: '33_Venerdi_09_30_15_50',
                interactive: true,
    title: '33_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/33_Venerdi_09_30_15_50_12_0.png" /> 1<br />' });
var format_34_Venerdi_21_50_05_26_13 = new ol.format.GeoJSON();
var features_34_Venerdi_21_50_05_26_13 = format_34_Venerdi_21_50_05_26_13.readFeatures(json_34_Venerdi_21_50_05_26_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Venerdi_21_50_05_26_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Venerdi_21_50_05_26_13.addFeatures(features_34_Venerdi_21_50_05_26_13);
var lyr_34_Venerdi_21_50_05_26_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Venerdi_21_50_05_26_13, 
                style: style_34_Venerdi_21_50_05_26_13,
                popuplayertitle: '34_Venerdi_21_50_05_26',
                interactive: true,
    title: '34_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_13_0.png" /> 1<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_13_1.png" /> 2<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_13_2.png" /> 3<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_13_3.png" /> 4<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_13_4.png" /> 5<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_13_5.png" /> 6<br />' });
var format_37_Venerdi_19_00_02_36_14 = new ol.format.GeoJSON();
var features_37_Venerdi_19_00_02_36_14 = format_37_Venerdi_19_00_02_36_14.readFeatures(json_37_Venerdi_19_00_02_36_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Venerdi_19_00_02_36_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Venerdi_19_00_02_36_14.addFeatures(features_37_Venerdi_19_00_02_36_14);
var lyr_37_Venerdi_19_00_02_36_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Venerdi_19_00_02_36_14, 
                style: style_37_Venerdi_19_00_02_36_14,
                popuplayertitle: '37_Venerdi_19_00_02_36',
                interactive: true,
    title: '37_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/37_Venerdi_19_00_02_36_14_0.png" /> 1<br />' });
var format_38_Venerdi_05_30_13_06_15 = new ol.format.GeoJSON();
var features_38_Venerdi_05_30_13_06_15 = format_38_Venerdi_05_30_13_06_15.readFeatures(json_38_Venerdi_05_30_13_06_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Venerdi_05_30_13_06_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Venerdi_05_30_13_06_15.addFeatures(features_38_Venerdi_05_30_13_06_15);
var lyr_38_Venerdi_05_30_13_06_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Venerdi_05_30_13_06_15, 
                style: style_38_Venerdi_05_30_13_06_15,
                popuplayertitle: '38_Venerdi_05_30_13_06',
                interactive: true,
    title: '38_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_0.png" /> 1<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_1.png" /> 2<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_2.png" /> 3<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_3.png" /> 4<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_4.png" /> 5<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_5.png" /> 6<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_6.png" /> 7<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_7.png" /> 8<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_8.png" /> 9<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_9.png" /> 10<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_10.png" /> 11<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_11.png" /> 12<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_12.png" /> 13<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_13.png" /> 14<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_14.png" /> 15<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_15.png" /> 16<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_16.png" /> 17<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_17.png" /> 18<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_18.png" /> 19<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_19.png" /> 20<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_20.png" /> 21<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_15_21.png" /> 22<br />' });
var format_39_Venerdi_13_07_20_43_16 = new ol.format.GeoJSON();
var features_39_Venerdi_13_07_20_43_16 = format_39_Venerdi_13_07_20_43_16.readFeatures(json_39_Venerdi_13_07_20_43_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Venerdi_13_07_20_43_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Venerdi_13_07_20_43_16.addFeatures(features_39_Venerdi_13_07_20_43_16);
var lyr_39_Venerdi_13_07_20_43_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Venerdi_13_07_20_43_16, 
                style: style_39_Venerdi_13_07_20_43_16,
                popuplayertitle: '39_Venerdi_13_07_20_43',
                interactive: true,
    title: '39_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_0.png" /> 1<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_1.png" /> 2<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_2.png" /> 3<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_3.png" /> 4<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_4.png" /> 5<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_5.png" /> 6<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_6.png" /> 7<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_7.png" /> 8<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_8.png" /> 9<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_9.png" /> 10<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_10.png" /> 11<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_11.png" /> 12<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_16_12.png" /> 13<br />' });
var format_33_Giovedi_09_30_15_50_17 = new ol.format.GeoJSON();
var features_33_Giovedi_09_30_15_50_17 = format_33_Giovedi_09_30_15_50_17.readFeatures(json_33_Giovedi_09_30_15_50_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Giovedi_09_30_15_50_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Giovedi_09_30_15_50_17.addFeatures(features_33_Giovedi_09_30_15_50_17);
var lyr_33_Giovedi_09_30_15_50_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Giovedi_09_30_15_50_17, 
                style: style_33_Giovedi_09_30_15_50_17,
                popuplayertitle: '33_Giovedi_09_30_15_50',
                interactive: true,
    title: '33_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/33_Giovedi_09_30_15_50_17_0.png" /> 1<br />' });
var format_34_Giovedi_21_50_05_26_18 = new ol.format.GeoJSON();
var features_34_Giovedi_21_50_05_26_18 = format_34_Giovedi_21_50_05_26_18.readFeatures(json_34_Giovedi_21_50_05_26_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Giovedi_21_50_05_26_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Giovedi_21_50_05_26_18.addFeatures(features_34_Giovedi_21_50_05_26_18);
var lyr_34_Giovedi_21_50_05_26_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Giovedi_21_50_05_26_18, 
                style: style_34_Giovedi_21_50_05_26_18,
                popuplayertitle: '34_Giovedi_21_50_05_26',
                interactive: true,
    title: '34_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_18_0.png" /> 1<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_18_1.png" /> 2<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_18_2.png" /> 3<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_18_3.png" /> 4<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_18_4.png" /> 5<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_18_5.png" /> 6<br />' });
var format_37_Giovedi_19_00_02_36_19 = new ol.format.GeoJSON();
var features_37_Giovedi_19_00_02_36_19 = format_37_Giovedi_19_00_02_36_19.readFeatures(json_37_Giovedi_19_00_02_36_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Giovedi_19_00_02_36_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Giovedi_19_00_02_36_19.addFeatures(features_37_Giovedi_19_00_02_36_19);
var lyr_37_Giovedi_19_00_02_36_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Giovedi_19_00_02_36_19, 
                style: style_37_Giovedi_19_00_02_36_19,
                popuplayertitle: '37_Giovedi_19_00_02_36',
                interactive: true,
    title: '37_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/37_Giovedi_19_00_02_36_19_0.png" /> 1<br />' });
var format_38_Giovedi_05_30_13_06_20 = new ol.format.GeoJSON();
var features_38_Giovedi_05_30_13_06_20 = format_38_Giovedi_05_30_13_06_20.readFeatures(json_38_Giovedi_05_30_13_06_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Giovedi_05_30_13_06_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Giovedi_05_30_13_06_20.addFeatures(features_38_Giovedi_05_30_13_06_20);
var lyr_38_Giovedi_05_30_13_06_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Giovedi_05_30_13_06_20, 
                style: style_38_Giovedi_05_30_13_06_20,
                popuplayertitle: '38_Giovedi_05_30_13_06',
                interactive: true,
    title: '38_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_0.png" /> 1<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_1.png" /> 2<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_2.png" /> 3<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_3.png" /> 4<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_4.png" /> 5<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_5.png" /> 6<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_6.png" /> 7<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_7.png" /> 8<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_8.png" /> 9<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_9.png" /> 10<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_10.png" /> 11<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_11.png" /> 12<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_12.png" /> 13<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_13.png" /> 14<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_14.png" /> 15<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_15.png" /> 16<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_16.png" /> 17<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_17.png" /> 18<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_18.png" /> 19<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_19.png" /> 20<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_20.png" /> 21<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_20_21.png" /> 22<br />' });
var format_39_Giovedi_13_07_20_43_21 = new ol.format.GeoJSON();
var features_39_Giovedi_13_07_20_43_21 = format_39_Giovedi_13_07_20_43_21.readFeatures(json_39_Giovedi_13_07_20_43_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Giovedi_13_07_20_43_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Giovedi_13_07_20_43_21.addFeatures(features_39_Giovedi_13_07_20_43_21);
var lyr_39_Giovedi_13_07_20_43_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Giovedi_13_07_20_43_21, 
                style: style_39_Giovedi_13_07_20_43_21,
                popuplayertitle: '39_Giovedi_13_07_20_43',
                interactive: true,
    title: '39_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_0.png" /> 1<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_1.png" /> 2<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_2.png" /> 3<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_3.png" /> 4<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_4.png" /> 5<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_5.png" /> 6<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_6.png" /> 7<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_7.png" /> 8<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_8.png" /> 9<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_9.png" /> 10<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_10.png" /> 11<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_11.png" /> 12<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_21_12.png" /> 13<br />' });
var format_33_Mercoledi_09_30_15_50_22 = new ol.format.GeoJSON();
var features_33_Mercoledi_09_30_15_50_22 = format_33_Mercoledi_09_30_15_50_22.readFeatures(json_33_Mercoledi_09_30_15_50_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Mercoledi_09_30_15_50_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Mercoledi_09_30_15_50_22.addFeatures(features_33_Mercoledi_09_30_15_50_22);
var lyr_33_Mercoledi_09_30_15_50_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Mercoledi_09_30_15_50_22, 
                style: style_33_Mercoledi_09_30_15_50_22,
                popuplayertitle: '33_Mercoledi_09_30_15_50',
                interactive: true,
    title: '33_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/33_Mercoledi_09_30_15_50_22_0.png" /> 1<br />' });
var format_34_Mercoledi_21_50_05_26_23 = new ol.format.GeoJSON();
var features_34_Mercoledi_21_50_05_26_23 = format_34_Mercoledi_21_50_05_26_23.readFeatures(json_34_Mercoledi_21_50_05_26_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Mercoledi_21_50_05_26_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Mercoledi_21_50_05_26_23.addFeatures(features_34_Mercoledi_21_50_05_26_23);
var lyr_34_Mercoledi_21_50_05_26_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Mercoledi_21_50_05_26_23, 
                style: style_34_Mercoledi_21_50_05_26_23,
                popuplayertitle: '34_Mercoledi_21_50_05_26',
                interactive: true,
    title: '34_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_23_0.png" /> 1<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_23_1.png" /> 2<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_23_2.png" /> 3<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_23_3.png" /> 4<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_23_4.png" /> 5<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_23_5.png" /> 6<br />' });
var format_37_Mercoledi_19_00_02_36_24 = new ol.format.GeoJSON();
var features_37_Mercoledi_19_00_02_36_24 = format_37_Mercoledi_19_00_02_36_24.readFeatures(json_37_Mercoledi_19_00_02_36_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Mercoledi_19_00_02_36_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Mercoledi_19_00_02_36_24.addFeatures(features_37_Mercoledi_19_00_02_36_24);
var lyr_37_Mercoledi_19_00_02_36_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Mercoledi_19_00_02_36_24, 
                style: style_37_Mercoledi_19_00_02_36_24,
                popuplayertitle: '37_Mercoledi_19_00_02_36',
                interactive: true,
    title: '37_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/37_Mercoledi_19_00_02_36_24_0.png" /> 1<br />' });
var format_38_Mercoledi_05_30_13_06_25 = new ol.format.GeoJSON();
var features_38_Mercoledi_05_30_13_06_25 = format_38_Mercoledi_05_30_13_06_25.readFeatures(json_38_Mercoledi_05_30_13_06_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Mercoledi_05_30_13_06_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Mercoledi_05_30_13_06_25.addFeatures(features_38_Mercoledi_05_30_13_06_25);
var lyr_38_Mercoledi_05_30_13_06_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Mercoledi_05_30_13_06_25, 
                style: style_38_Mercoledi_05_30_13_06_25,
                popuplayertitle: '38_Mercoledi_05_30_13_06',
                interactive: true,
    title: '38_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_0.png" /> 1<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_1.png" /> 2<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_2.png" /> 3<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_3.png" /> 4<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_4.png" /> 5<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_5.png" /> 6<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_6.png" /> 7<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_7.png" /> 8<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_8.png" /> 9<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_9.png" /> 10<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_10.png" /> 11<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_11.png" /> 12<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_12.png" /> 13<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_13.png" /> 14<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_14.png" /> 15<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_15.png" /> 16<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_16.png" /> 17<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_17.png" /> 18<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_18.png" /> 19<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_19.png" /> 20<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_20.png" /> 21<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_25_21.png" /> 22<br />' });
var format_39_Mercoledi_13_07_20_43_26 = new ol.format.GeoJSON();
var features_39_Mercoledi_13_07_20_43_26 = format_39_Mercoledi_13_07_20_43_26.readFeatures(json_39_Mercoledi_13_07_20_43_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Mercoledi_13_07_20_43_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Mercoledi_13_07_20_43_26.addFeatures(features_39_Mercoledi_13_07_20_43_26);
var lyr_39_Mercoledi_13_07_20_43_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Mercoledi_13_07_20_43_26, 
                style: style_39_Mercoledi_13_07_20_43_26,
                popuplayertitle: '39_Mercoledi_13_07_20_43',
                interactive: true,
    title: '39_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_0.png" /> 1<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_1.png" /> 2<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_2.png" /> 3<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_3.png" /> 4<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_4.png" /> 5<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_5.png" /> 6<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_6.png" /> 7<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_7.png" /> 8<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_8.png" /> 9<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_9.png" /> 10<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_10.png" /> 11<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_11.png" /> 12<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_26_12.png" /> 13<br />' });
var format_33_Martedi_09_30_15_50_27 = new ol.format.GeoJSON();
var features_33_Martedi_09_30_15_50_27 = format_33_Martedi_09_30_15_50_27.readFeatures(json_33_Martedi_09_30_15_50_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Martedi_09_30_15_50_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Martedi_09_30_15_50_27.addFeatures(features_33_Martedi_09_30_15_50_27);
var lyr_33_Martedi_09_30_15_50_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Martedi_09_30_15_50_27, 
                style: style_33_Martedi_09_30_15_50_27,
                popuplayertitle: '33_Martedi_09_30_15_50',
                interactive: true,
    title: '33_Martedi_09_30_15_50<br />\
    <img src="styles/legend/33_Martedi_09_30_15_50_27_0.png" /> 1<br />' });
var format_34_Martedi_21_50_05_26_28 = new ol.format.GeoJSON();
var features_34_Martedi_21_50_05_26_28 = format_34_Martedi_21_50_05_26_28.readFeatures(json_34_Martedi_21_50_05_26_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Martedi_21_50_05_26_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Martedi_21_50_05_26_28.addFeatures(features_34_Martedi_21_50_05_26_28);
var lyr_34_Martedi_21_50_05_26_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Martedi_21_50_05_26_28, 
                style: style_34_Martedi_21_50_05_26_28,
                popuplayertitle: '34_Martedi_21_50_05_26',
                interactive: true,
    title: '34_Martedi_21_50_05_26<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_28_0.png" /> 1<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_28_1.png" /> 2<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_28_2.png" /> 3<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_28_3.png" /> 4<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_28_4.png" /> 5<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_28_5.png" /> 6<br />' });
var format_37_Martedi_19_00_02_36_29 = new ol.format.GeoJSON();
var features_37_Martedi_19_00_02_36_29 = format_37_Martedi_19_00_02_36_29.readFeatures(json_37_Martedi_19_00_02_36_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Martedi_19_00_02_36_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Martedi_19_00_02_36_29.addFeatures(features_37_Martedi_19_00_02_36_29);
var lyr_37_Martedi_19_00_02_36_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Martedi_19_00_02_36_29, 
                style: style_37_Martedi_19_00_02_36_29,
                popuplayertitle: '37_Martedi_19_00_02_36',
                interactive: true,
    title: '37_Martedi_19_00_02_36<br />\
    <img src="styles/legend/37_Martedi_19_00_02_36_29_0.png" /> 1<br />' });
var format_38_Martedi_05_30_13_06_30 = new ol.format.GeoJSON();
var features_38_Martedi_05_30_13_06_30 = format_38_Martedi_05_30_13_06_30.readFeatures(json_38_Martedi_05_30_13_06_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Martedi_05_30_13_06_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Martedi_05_30_13_06_30.addFeatures(features_38_Martedi_05_30_13_06_30);
var lyr_38_Martedi_05_30_13_06_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Martedi_05_30_13_06_30, 
                style: style_38_Martedi_05_30_13_06_30,
                popuplayertitle: '38_Martedi_05_30_13_06',
                interactive: true,
    title: '38_Martedi_05_30_13_06<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_0.png" /> 1<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_1.png" /> 2<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_2.png" /> 3<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_3.png" /> 4<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_4.png" /> 5<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_5.png" /> 6<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_6.png" /> 7<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_7.png" /> 8<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_8.png" /> 9<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_9.png" /> 10<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_10.png" /> 11<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_11.png" /> 12<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_12.png" /> 13<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_13.png" /> 14<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_14.png" /> 15<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_15.png" /> 16<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_16.png" /> 17<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_17.png" /> 18<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_18.png" /> 19<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_19.png" /> 20<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_20.png" /> 21<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_30_21.png" /> 22<br />' });
var format_39_Martedi_13_07_20_43_31 = new ol.format.GeoJSON();
var features_39_Martedi_13_07_20_43_31 = format_39_Martedi_13_07_20_43_31.readFeatures(json_39_Martedi_13_07_20_43_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Martedi_13_07_20_43_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Martedi_13_07_20_43_31.addFeatures(features_39_Martedi_13_07_20_43_31);
var lyr_39_Martedi_13_07_20_43_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Martedi_13_07_20_43_31, 
                style: style_39_Martedi_13_07_20_43_31,
                popuplayertitle: '39_Martedi_13_07_20_43',
                interactive: true,
    title: '39_Martedi_13_07_20_43<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_0.png" /> 1<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_1.png" /> 2<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_2.png" /> 3<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_3.png" /> 4<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_4.png" /> 5<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_5.png" /> 6<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_6.png" /> 7<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_7.png" /> 8<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_8.png" /> 9<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_9.png" /> 10<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_10.png" /> 11<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_11.png" /> 12<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_31_12.png" /> 13<br />' });
var format_33_Lunedi_09_30_15_50_32 = new ol.format.GeoJSON();
var features_33_Lunedi_09_30_15_50_32 = format_33_Lunedi_09_30_15_50_32.readFeatures(json_33_Lunedi_09_30_15_50_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Lunedi_09_30_15_50_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Lunedi_09_30_15_50_32.addFeatures(features_33_Lunedi_09_30_15_50_32);
var lyr_33_Lunedi_09_30_15_50_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Lunedi_09_30_15_50_32, 
                style: style_33_Lunedi_09_30_15_50_32,
                popuplayertitle: '33_Lunedi_09_30_15_50',
                interactive: true,
    title: '33_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/33_Lunedi_09_30_15_50_32_0.png" /> 1<br />' });
var format_34_Lunedi_21_50_05_26_33 = new ol.format.GeoJSON();
var features_34_Lunedi_21_50_05_26_33 = format_34_Lunedi_21_50_05_26_33.readFeatures(json_34_Lunedi_21_50_05_26_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Lunedi_21_50_05_26_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Lunedi_21_50_05_26_33.addFeatures(features_34_Lunedi_21_50_05_26_33);
var lyr_34_Lunedi_21_50_05_26_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Lunedi_21_50_05_26_33, 
                style: style_34_Lunedi_21_50_05_26_33,
                popuplayertitle: '34_Lunedi_21_50_05_26',
                interactive: true,
    title: '34_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_33_0.png" /> 1<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_33_1.png" /> 2<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_33_2.png" /> 3<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_33_3.png" /> 4<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_33_4.png" /> 5<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_33_5.png" /> 6<br />' });
var format_37_Lunedi_19_00_02_36_34 = new ol.format.GeoJSON();
var features_37_Lunedi_19_00_02_36_34 = format_37_Lunedi_19_00_02_36_34.readFeatures(json_37_Lunedi_19_00_02_36_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Lunedi_19_00_02_36_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Lunedi_19_00_02_36_34.addFeatures(features_37_Lunedi_19_00_02_36_34);
var lyr_37_Lunedi_19_00_02_36_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Lunedi_19_00_02_36_34, 
                style: style_37_Lunedi_19_00_02_36_34,
                popuplayertitle: '37_Lunedi_19_00_02_36',
                interactive: true,
    title: '37_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/37_Lunedi_19_00_02_36_34_0.png" /> 1<br />' });
var format_38_Lunedi_05_30_13_06_35 = new ol.format.GeoJSON();
var features_38_Lunedi_05_30_13_06_35 = format_38_Lunedi_05_30_13_06_35.readFeatures(json_38_Lunedi_05_30_13_06_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Lunedi_05_30_13_06_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Lunedi_05_30_13_06_35.addFeatures(features_38_Lunedi_05_30_13_06_35);
var lyr_38_Lunedi_05_30_13_06_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Lunedi_05_30_13_06_35, 
                style: style_38_Lunedi_05_30_13_06_35,
                popuplayertitle: '38_Lunedi_05_30_13_06',
                interactive: true,
    title: '38_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_0.png" /> 1<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_1.png" /> 2<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_2.png" /> 3<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_3.png" /> 4<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_4.png" /> 5<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_5.png" /> 6<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_6.png" /> 7<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_7.png" /> 8<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_8.png" /> 9<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_9.png" /> 10<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_10.png" /> 11<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_11.png" /> 12<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_12.png" /> 13<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_13.png" /> 14<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_14.png" /> 15<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_15.png" /> 16<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_16.png" /> 17<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_17.png" /> 18<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_18.png" /> 19<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_19.png" /> 20<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_20.png" /> 21<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_35_21.png" /> 22<br />' });
var format_39_Lunedi_13_07_20_43_36 = new ol.format.GeoJSON();
var features_39_Lunedi_13_07_20_43_36 = format_39_Lunedi_13_07_20_43_36.readFeatures(json_39_Lunedi_13_07_20_43_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Lunedi_13_07_20_43_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Lunedi_13_07_20_43_36.addFeatures(features_39_Lunedi_13_07_20_43_36);
var lyr_39_Lunedi_13_07_20_43_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Lunedi_13_07_20_43_36, 
                style: style_39_Lunedi_13_07_20_43_36,
                popuplayertitle: '39_Lunedi_13_07_20_43',
                interactive: true,
    title: '39_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_0.png" /> 1<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_1.png" /> 2<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_2.png" /> 3<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_3.png" /> 4<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_4.png" /> 5<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_5.png" /> 6<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_6.png" /> 7<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_7.png" /> 8<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_8.png" /> 9<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_9.png" /> 10<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_10.png" /> 11<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_11.png" /> 12<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_36_12.png" /> 13<br />' });
var group_LunediP1716Nov2026 = new ol.layer.Group({
                                layers: [lyr_33_Lunedi_09_30_15_50_32,lyr_34_Lunedi_21_50_05_26_33,lyr_37_Lunedi_19_00_02_36_34,lyr_38_Lunedi_05_30_13_06_35,lyr_39_Lunedi_13_07_20_43_36,],
                                fold: 'close',
                                title: 'Lunedi - P17 16 Nov 2026'});
var group_MartediP1716Nov2026 = new ol.layer.Group({
                                layers: [lyr_33_Martedi_09_30_15_50_27,lyr_34_Martedi_21_50_05_26_28,lyr_37_Martedi_19_00_02_36_29,lyr_38_Martedi_05_30_13_06_30,lyr_39_Martedi_13_07_20_43_31,],
                                fold: 'close',
                                title: 'Martedi - P17 16 Nov 2026'});
var group_MercolediP1716Nov2026 = new ol.layer.Group({
                                layers: [lyr_33_Mercoledi_09_30_15_50_22,lyr_34_Mercoledi_21_50_05_26_23,lyr_37_Mercoledi_19_00_02_36_24,lyr_38_Mercoledi_05_30_13_06_25,lyr_39_Mercoledi_13_07_20_43_26,],
                                fold: 'close',
                                title: 'Mercoledi - P17 16 Nov 2026'});
var group_GiovediP1716Nov2026 = new ol.layer.Group({
                                layers: [lyr_33_Giovedi_09_30_15_50_17,lyr_34_Giovedi_21_50_05_26_18,lyr_37_Giovedi_19_00_02_36_19,lyr_38_Giovedi_05_30_13_06_20,lyr_39_Giovedi_13_07_20_43_21,],
                                fold: 'close',
                                title: 'Giovedi - P17 16 Nov 2026'});
var group_VenerdiP1716Nov2026 = new ol.layer.Group({
                                layers: [lyr_33_Venerdi_09_30_15_50_12,lyr_34_Venerdi_21_50_05_26_13,lyr_37_Venerdi_19_00_02_36_14,lyr_38_Venerdi_05_30_13_06_15,lyr_39_Venerdi_13_07_20_43_16,],
                                fold: 'close',
                                title: 'Venerdi - P17 16 Nov 2026'});
var group_SabatoP1716Nov2026 = new ol.layer.Group({
                                layers: [lyr_33_Sabato_09_30_15_50_7,lyr_34_Sabato_21_50_05_26_8,lyr_37_Sabato_19_00_02_36_9,lyr_38_Sabato_05_30_13_06_10,lyr_39_Sabato_13_07_20_43_11,],
                                fold: 'close',
                                title: 'Sabato - P17 16 Nov 2026'});
var group_DomenicaP1716Nov2026 = new ol.layer.Group({
                                layers: [lyr_33_Domenica_09_30_15_50_2,lyr_34_Domenica_21_50_05_26_3,lyr_37_Domenica_19_00_02_36_4,lyr_38_Domenica_05_30_13_06_5,lyr_39_Domenica_13_07_20_43_6,],
                                fold: 'close',
                                title: 'Domenica - P17 16 Nov 2026'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Confini_Comune_Milanodissolto_1.setVisible(true);lyr_33_Domenica_09_30_15_50_2.setVisible(false);lyr_34_Domenica_21_50_05_26_3.setVisible(false);lyr_37_Domenica_19_00_02_36_4.setVisible(false);lyr_38_Domenica_05_30_13_06_5.setVisible(false);lyr_39_Domenica_13_07_20_43_6.setVisible(false);lyr_33_Sabato_09_30_15_50_7.setVisible(false);lyr_34_Sabato_21_50_05_26_8.setVisible(false);lyr_37_Sabato_19_00_02_36_9.setVisible(false);lyr_38_Sabato_05_30_13_06_10.setVisible(false);lyr_39_Sabato_13_07_20_43_11.setVisible(false);lyr_33_Venerdi_09_30_15_50_12.setVisible(false);lyr_34_Venerdi_21_50_05_26_13.setVisible(false);lyr_37_Venerdi_19_00_02_36_14.setVisible(false);lyr_38_Venerdi_05_30_13_06_15.setVisible(false);lyr_39_Venerdi_13_07_20_43_16.setVisible(false);lyr_33_Giovedi_09_30_15_50_17.setVisible(false);lyr_34_Giovedi_21_50_05_26_18.setVisible(false);lyr_37_Giovedi_19_00_02_36_19.setVisible(false);lyr_38_Giovedi_05_30_13_06_20.setVisible(false);lyr_39_Giovedi_13_07_20_43_21.setVisible(false);lyr_33_Mercoledi_09_30_15_50_22.setVisible(false);lyr_34_Mercoledi_21_50_05_26_23.setVisible(false);lyr_37_Mercoledi_19_00_02_36_24.setVisible(false);lyr_38_Mercoledi_05_30_13_06_25.setVisible(false);lyr_39_Mercoledi_13_07_20_43_26.setVisible(false);lyr_33_Martedi_09_30_15_50_27.setVisible(false);lyr_34_Martedi_21_50_05_26_28.setVisible(false);lyr_37_Martedi_19_00_02_36_29.setVisible(false);lyr_38_Martedi_05_30_13_06_30.setVisible(false);lyr_39_Martedi_13_07_20_43_31.setVisible(false);lyr_33_Lunedi_09_30_15_50_32.setVisible(false);lyr_34_Lunedi_21_50_05_26_33.setVisible(false);lyr_37_Lunedi_19_00_02_36_34.setVisible(false);lyr_38_Lunedi_05_30_13_06_35.setVisible(true);lyr_39_Lunedi_13_07_20_43_36.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Confini_Comune_Milanodissolto_1,group_DomenicaP1716Nov2026,group_SabatoP1716Nov2026,group_VenerdiP1716Nov2026,group_GiovediP1716Nov2026,group_MercolediP1716Nov2026,group_MartediP1716Nov2026,group_LunediP1716Nov2026];
lyr_Confini_Comune_Milanodissolto_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', });
lyr_33_Domenica_09_30_15_50_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_34_Domenica_21_50_05_26_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_37_Domenica_19_00_02_36_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_38_Domenica_05_30_13_06_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_39_Domenica_13_07_20_43_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_33_Sabato_09_30_15_50_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_34_Sabato_21_50_05_26_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_37_Sabato_19_00_02_36_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_38_Sabato_05_30_13_06_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_39_Sabato_13_07_20_43_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_33_Venerdi_09_30_15_50_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_34_Venerdi_21_50_05_26_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_37_Venerdi_19_00_02_36_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_38_Venerdi_05_30_13_06_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_39_Venerdi_13_07_20_43_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_33_Giovedi_09_30_15_50_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_34_Giovedi_21_50_05_26_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_37_Giovedi_19_00_02_36_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_38_Giovedi_05_30_13_06_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_39_Giovedi_13_07_20_43_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_33_Mercoledi_09_30_15_50_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_34_Mercoledi_21_50_05_26_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_37_Mercoledi_19_00_02_36_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_38_Mercoledi_05_30_13_06_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_39_Mercoledi_13_07_20_43_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_33_Martedi_09_30_15_50_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_34_Martedi_21_50_05_26_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_37_Martedi_19_00_02_36_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_38_Martedi_05_30_13_06_30.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_39_Martedi_13_07_20_43_31.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_33_Lunedi_09_30_15_50_32.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_34_Lunedi_21_50_05_26_33.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_37_Lunedi_19_00_02_36_34.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_38_Lunedi_05_30_13_06_35.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_39_Lunedi_13_07_20_43_36.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_33_Domenica_09_30_15_50_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_34_Domenica_21_50_05_26_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_37_Domenica_19_00_02_36_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_38_Domenica_05_30_13_06_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_39_Domenica_13_07_20_43_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_33_Sabato_09_30_15_50_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_34_Sabato_21_50_05_26_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_37_Sabato_19_00_02_36_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_38_Sabato_05_30_13_06_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_39_Sabato_13_07_20_43_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_33_Venerdi_09_30_15_50_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_34_Venerdi_21_50_05_26_13.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_37_Venerdi_19_00_02_36_14.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_38_Venerdi_05_30_13_06_15.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_39_Venerdi_13_07_20_43_16.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_33_Giovedi_09_30_15_50_17.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_34_Giovedi_21_50_05_26_18.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_37_Giovedi_19_00_02_36_19.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_38_Giovedi_05_30_13_06_20.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_39_Giovedi_13_07_20_43_21.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_33_Mercoledi_09_30_15_50_22.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_34_Mercoledi_21_50_05_26_23.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_37_Mercoledi_19_00_02_36_24.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_38_Mercoledi_05_30_13_06_25.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_39_Mercoledi_13_07_20_43_26.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_33_Martedi_09_30_15_50_27.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_34_Martedi_21_50_05_26_28.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_37_Martedi_19_00_02_36_29.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_38_Martedi_05_30_13_06_30.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_39_Martedi_13_07_20_43_31.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_33_Lunedi_09_30_15_50_32.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_34_Lunedi_21_50_05_26_33.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_37_Lunedi_19_00_02_36_34.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_38_Lunedi_05_30_13_06_35.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_39_Lunedi_13_07_20_43_36.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldLabels', {'fid': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETRO': 'inline label - always visible', });
lyr_33_Domenica_09_30_15_50_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Domenica_21_50_05_26_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Domenica_19_00_02_36_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Domenica_05_30_13_06_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Domenica_13_07_20_43_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Sabato_09_30_15_50_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Sabato_21_50_05_26_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Sabato_19_00_02_36_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Sabato_05_30_13_06_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Sabato_13_07_20_43_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Venerdi_09_30_15_50_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Venerdi_21_50_05_26_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Venerdi_19_00_02_36_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Venerdi_05_30_13_06_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Venerdi_13_07_20_43_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Giovedi_09_30_15_50_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Giovedi_21_50_05_26_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Giovedi_19_00_02_36_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Giovedi_05_30_13_06_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Giovedi_13_07_20_43_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Mercoledi_09_30_15_50_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Mercoledi_21_50_05_26_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Mercoledi_19_00_02_36_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Mercoledi_05_30_13_06_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Mercoledi_13_07_20_43_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Martedi_09_30_15_50_27.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Martedi_21_50_05_26_28.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Martedi_19_00_02_36_29.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Martedi_05_30_13_06_30.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Martedi_13_07_20_43_31.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_33_Lunedi_09_30_15_50_32.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_34_Lunedi_21_50_05_26_33.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_37_Lunedi_19_00_02_36_34.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_38_Lunedi_05_30_13_06_35.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Lunedi_13_07_20_43_36.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_39_Lunedi_13_07_20_43_36.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});