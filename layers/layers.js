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
var format_39_Venerdi_13_07_20_43_2 = new ol.format.GeoJSON();
var features_39_Venerdi_13_07_20_43_2 = format_39_Venerdi_13_07_20_43_2.readFeatures(json_39_Venerdi_13_07_20_43_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Venerdi_13_07_20_43_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Venerdi_13_07_20_43_2.addFeatures(features_39_Venerdi_13_07_20_43_2);
var lyr_39_Venerdi_13_07_20_43_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Venerdi_13_07_20_43_2, 
                style: style_39_Venerdi_13_07_20_43_2,
                popuplayertitle: '39_Venerdi_13_07_20_43',
                interactive: true,
    title: '39_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_0.png" /> 1<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_1.png" /> 2<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_2.png" /> 3<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_3.png" /> 4<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_4.png" /> 5<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_5.png" /> 6<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_6.png" /> 7<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_7.png" /> 8<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_8.png" /> 9<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_9.png" /> 10<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_10.png" /> 11<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_11.png" /> 12<br />\
    <img src="styles/legend/39_Venerdi_13_07_20_43_2_12.png" /> 13<br />' });
var format_38_Venerdi_05_30_13_06_3 = new ol.format.GeoJSON();
var features_38_Venerdi_05_30_13_06_3 = format_38_Venerdi_05_30_13_06_3.readFeatures(json_38_Venerdi_05_30_13_06_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Venerdi_05_30_13_06_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Venerdi_05_30_13_06_3.addFeatures(features_38_Venerdi_05_30_13_06_3);
var lyr_38_Venerdi_05_30_13_06_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Venerdi_05_30_13_06_3, 
                style: style_38_Venerdi_05_30_13_06_3,
                popuplayertitle: '38_Venerdi_05_30_13_06',
                interactive: true,
    title: '38_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_0.png" /> 1<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_1.png" /> 2<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_2.png" /> 3<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_3.png" /> 4<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_4.png" /> 5<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_5.png" /> 6<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_6.png" /> 7<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_7.png" /> 8<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_8.png" /> 9<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_9.png" /> 10<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_10.png" /> 11<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_11.png" /> 12<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_12.png" /> 13<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_13.png" /> 14<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_14.png" /> 15<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_15.png" /> 16<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_16.png" /> 17<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_17.png" /> 18<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_18.png" /> 19<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_19.png" /> 20<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_20.png" /> 21<br />\
    <img src="styles/legend/38_Venerdi_05_30_13_06_3_21.png" /> 22<br />' });
var format_37_Venerdi_19_00_02_36_4 = new ol.format.GeoJSON();
var features_37_Venerdi_19_00_02_36_4 = format_37_Venerdi_19_00_02_36_4.readFeatures(json_37_Venerdi_19_00_02_36_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Venerdi_19_00_02_36_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Venerdi_19_00_02_36_4.addFeatures(features_37_Venerdi_19_00_02_36_4);
var lyr_37_Venerdi_19_00_02_36_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Venerdi_19_00_02_36_4, 
                style: style_37_Venerdi_19_00_02_36_4,
                popuplayertitle: '37_Venerdi_19_00_02_36',
                interactive: true,
    title: '37_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/37_Venerdi_19_00_02_36_4_0.png" /> 1<br />' });
var format_34_Venerdi_21_50_05_26_5 = new ol.format.GeoJSON();
var features_34_Venerdi_21_50_05_26_5 = format_34_Venerdi_21_50_05_26_5.readFeatures(json_34_Venerdi_21_50_05_26_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Venerdi_21_50_05_26_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Venerdi_21_50_05_26_5.addFeatures(features_34_Venerdi_21_50_05_26_5);
var lyr_34_Venerdi_21_50_05_26_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Venerdi_21_50_05_26_5, 
                style: style_34_Venerdi_21_50_05_26_5,
                popuplayertitle: '34_Venerdi_21_50_05_26',
                interactive: true,
    title: '34_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_5_0.png" /> 1<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_5_1.png" /> 2<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_5_2.png" /> 3<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_5_3.png" /> 4<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_5_4.png" /> 5<br />\
    <img src="styles/legend/34_Venerdi_21_50_05_26_5_5.png" /> 6<br />' });
var format_33_Venerdi_09_30_15_50_6 = new ol.format.GeoJSON();
var features_33_Venerdi_09_30_15_50_6 = format_33_Venerdi_09_30_15_50_6.readFeatures(json_33_Venerdi_09_30_15_50_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Venerdi_09_30_15_50_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Venerdi_09_30_15_50_6.addFeatures(features_33_Venerdi_09_30_15_50_6);
var lyr_33_Venerdi_09_30_15_50_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Venerdi_09_30_15_50_6, 
                style: style_33_Venerdi_09_30_15_50_6,
                popuplayertitle: '33_Venerdi_09_30_15_50',
                interactive: true,
    title: '33_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/33_Venerdi_09_30_15_50_6_0.png" /> 1<br />' });
var format_39_Giovedi_13_07_20_43_7 = new ol.format.GeoJSON();
var features_39_Giovedi_13_07_20_43_7 = format_39_Giovedi_13_07_20_43_7.readFeatures(json_39_Giovedi_13_07_20_43_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Giovedi_13_07_20_43_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Giovedi_13_07_20_43_7.addFeatures(features_39_Giovedi_13_07_20_43_7);
var lyr_39_Giovedi_13_07_20_43_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Giovedi_13_07_20_43_7, 
                style: style_39_Giovedi_13_07_20_43_7,
                popuplayertitle: '39_Giovedi_13_07_20_43',
                interactive: true,
    title: '39_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_0.png" /> 1<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_1.png" /> 2<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_2.png" /> 3<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_3.png" /> 4<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_4.png" /> 5<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_5.png" /> 6<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_6.png" /> 7<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_7.png" /> 8<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_8.png" /> 9<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_9.png" /> 10<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_10.png" /> 11<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_11.png" /> 12<br />\
    <img src="styles/legend/39_Giovedi_13_07_20_43_7_12.png" /> 13<br />' });
var format_38_Giovedi_05_30_13_06_8 = new ol.format.GeoJSON();
var features_38_Giovedi_05_30_13_06_8 = format_38_Giovedi_05_30_13_06_8.readFeatures(json_38_Giovedi_05_30_13_06_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Giovedi_05_30_13_06_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Giovedi_05_30_13_06_8.addFeatures(features_38_Giovedi_05_30_13_06_8);
var lyr_38_Giovedi_05_30_13_06_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Giovedi_05_30_13_06_8, 
                style: style_38_Giovedi_05_30_13_06_8,
                popuplayertitle: '38_Giovedi_05_30_13_06',
                interactive: true,
    title: '38_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_0.png" /> 1<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_1.png" /> 2<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_2.png" /> 3<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_3.png" /> 4<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_4.png" /> 5<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_5.png" /> 6<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_6.png" /> 7<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_7.png" /> 8<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_8.png" /> 9<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_9.png" /> 10<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_10.png" /> 11<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_11.png" /> 12<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_12.png" /> 13<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_13.png" /> 14<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_14.png" /> 15<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_15.png" /> 16<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_16.png" /> 17<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_17.png" /> 18<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_18.png" /> 19<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_19.png" /> 20<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_20.png" /> 21<br />\
    <img src="styles/legend/38_Giovedi_05_30_13_06_8_21.png" /> 22<br />' });
var format_37_Giovedi_19_00_02_36_9 = new ol.format.GeoJSON();
var features_37_Giovedi_19_00_02_36_9 = format_37_Giovedi_19_00_02_36_9.readFeatures(json_37_Giovedi_19_00_02_36_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Giovedi_19_00_02_36_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Giovedi_19_00_02_36_9.addFeatures(features_37_Giovedi_19_00_02_36_9);
var lyr_37_Giovedi_19_00_02_36_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Giovedi_19_00_02_36_9, 
                style: style_37_Giovedi_19_00_02_36_9,
                popuplayertitle: '37_Giovedi_19_00_02_36',
                interactive: true,
    title: '37_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/37_Giovedi_19_00_02_36_9_0.png" /> 1<br />' });
var format_34_Giovedi_21_50_05_26_10 = new ol.format.GeoJSON();
var features_34_Giovedi_21_50_05_26_10 = format_34_Giovedi_21_50_05_26_10.readFeatures(json_34_Giovedi_21_50_05_26_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Giovedi_21_50_05_26_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Giovedi_21_50_05_26_10.addFeatures(features_34_Giovedi_21_50_05_26_10);
var lyr_34_Giovedi_21_50_05_26_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Giovedi_21_50_05_26_10, 
                style: style_34_Giovedi_21_50_05_26_10,
                popuplayertitle: '34_Giovedi_21_50_05_26',
                interactive: true,
    title: '34_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_10_0.png" /> 1<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_10_1.png" /> 2<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_10_2.png" /> 3<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_10_3.png" /> 4<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_10_4.png" /> 5<br />\
    <img src="styles/legend/34_Giovedi_21_50_05_26_10_5.png" /> 6<br />' });
var format_33_Giovedi_09_30_15_50_11 = new ol.format.GeoJSON();
var features_33_Giovedi_09_30_15_50_11 = format_33_Giovedi_09_30_15_50_11.readFeatures(json_33_Giovedi_09_30_15_50_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Giovedi_09_30_15_50_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Giovedi_09_30_15_50_11.addFeatures(features_33_Giovedi_09_30_15_50_11);
var lyr_33_Giovedi_09_30_15_50_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Giovedi_09_30_15_50_11, 
                style: style_33_Giovedi_09_30_15_50_11,
                popuplayertitle: '33_Giovedi_09_30_15_50',
                interactive: true,
    title: '33_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/33_Giovedi_09_30_15_50_11_0.png" /> 1<br />' });
var format_39_Mercoledi_13_07_20_43_12 = new ol.format.GeoJSON();
var features_39_Mercoledi_13_07_20_43_12 = format_39_Mercoledi_13_07_20_43_12.readFeatures(json_39_Mercoledi_13_07_20_43_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Mercoledi_13_07_20_43_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Mercoledi_13_07_20_43_12.addFeatures(features_39_Mercoledi_13_07_20_43_12);
var lyr_39_Mercoledi_13_07_20_43_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Mercoledi_13_07_20_43_12, 
                style: style_39_Mercoledi_13_07_20_43_12,
                popuplayertitle: '39_Mercoledi_13_07_20_43',
                interactive: true,
    title: '39_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_0.png" /> 1<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_1.png" /> 2<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_2.png" /> 3<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_3.png" /> 4<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_4.png" /> 5<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_5.png" /> 6<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_6.png" /> 7<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_7.png" /> 8<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_8.png" /> 9<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_9.png" /> 10<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_10.png" /> 11<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_11.png" /> 12<br />\
    <img src="styles/legend/39_Mercoledi_13_07_20_43_12_12.png" /> 13<br />' });
var format_38_Mercoledi_05_30_13_06_13 = new ol.format.GeoJSON();
var features_38_Mercoledi_05_30_13_06_13 = format_38_Mercoledi_05_30_13_06_13.readFeatures(json_38_Mercoledi_05_30_13_06_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Mercoledi_05_30_13_06_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Mercoledi_05_30_13_06_13.addFeatures(features_38_Mercoledi_05_30_13_06_13);
var lyr_38_Mercoledi_05_30_13_06_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Mercoledi_05_30_13_06_13, 
                style: style_38_Mercoledi_05_30_13_06_13,
                popuplayertitle: '38_Mercoledi_05_30_13_06',
                interactive: true,
    title: '38_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_0.png" /> 1<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_1.png" /> 2<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_2.png" /> 3<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_3.png" /> 4<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_4.png" /> 5<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_5.png" /> 6<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_6.png" /> 7<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_7.png" /> 8<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_8.png" /> 9<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_9.png" /> 10<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_10.png" /> 11<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_11.png" /> 12<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_12.png" /> 13<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_13.png" /> 14<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_14.png" /> 15<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_15.png" /> 16<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_16.png" /> 17<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_17.png" /> 18<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_18.png" /> 19<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_19.png" /> 20<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_20.png" /> 21<br />\
    <img src="styles/legend/38_Mercoledi_05_30_13_06_13_21.png" /> 22<br />' });
var format_37_Mercoledi_19_00_02_36_14 = new ol.format.GeoJSON();
var features_37_Mercoledi_19_00_02_36_14 = format_37_Mercoledi_19_00_02_36_14.readFeatures(json_37_Mercoledi_19_00_02_36_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Mercoledi_19_00_02_36_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Mercoledi_19_00_02_36_14.addFeatures(features_37_Mercoledi_19_00_02_36_14);
var lyr_37_Mercoledi_19_00_02_36_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Mercoledi_19_00_02_36_14, 
                style: style_37_Mercoledi_19_00_02_36_14,
                popuplayertitle: '37_Mercoledi_19_00_02_36',
                interactive: true,
    title: '37_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/37_Mercoledi_19_00_02_36_14_0.png" /> 1<br />' });
var format_34_Mercoledi_21_50_05_26_15 = new ol.format.GeoJSON();
var features_34_Mercoledi_21_50_05_26_15 = format_34_Mercoledi_21_50_05_26_15.readFeatures(json_34_Mercoledi_21_50_05_26_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Mercoledi_21_50_05_26_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Mercoledi_21_50_05_26_15.addFeatures(features_34_Mercoledi_21_50_05_26_15);
var lyr_34_Mercoledi_21_50_05_26_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Mercoledi_21_50_05_26_15, 
                style: style_34_Mercoledi_21_50_05_26_15,
                popuplayertitle: '34_Mercoledi_21_50_05_26',
                interactive: true,
    title: '34_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_15_0.png" /> 1<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_15_1.png" /> 2<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_15_2.png" /> 3<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_15_3.png" /> 4<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_15_4.png" /> 5<br />\
    <img src="styles/legend/34_Mercoledi_21_50_05_26_15_5.png" /> 6<br />' });
var format_33_Mercoledi_09_30_15_50_16 = new ol.format.GeoJSON();
var features_33_Mercoledi_09_30_15_50_16 = format_33_Mercoledi_09_30_15_50_16.readFeatures(json_33_Mercoledi_09_30_15_50_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Mercoledi_09_30_15_50_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Mercoledi_09_30_15_50_16.addFeatures(features_33_Mercoledi_09_30_15_50_16);
var lyr_33_Mercoledi_09_30_15_50_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Mercoledi_09_30_15_50_16, 
                style: style_33_Mercoledi_09_30_15_50_16,
                popuplayertitle: '33_Mercoledi_09_30_15_50',
                interactive: true,
    title: '33_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/33_Mercoledi_09_30_15_50_16_0.png" /> 1<br />' });
var format_39_Martedi_13_07_20_43_17 = new ol.format.GeoJSON();
var features_39_Martedi_13_07_20_43_17 = format_39_Martedi_13_07_20_43_17.readFeatures(json_39_Martedi_13_07_20_43_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Martedi_13_07_20_43_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Martedi_13_07_20_43_17.addFeatures(features_39_Martedi_13_07_20_43_17);
var lyr_39_Martedi_13_07_20_43_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Martedi_13_07_20_43_17, 
                style: style_39_Martedi_13_07_20_43_17,
                popuplayertitle: '39_Martedi_13_07_20_43',
                interactive: true,
    title: '39_Martedi_13_07_20_43<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_0.png" /> 1<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_1.png" /> 2<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_2.png" /> 3<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_3.png" /> 4<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_4.png" /> 5<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_5.png" /> 6<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_6.png" /> 7<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_7.png" /> 8<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_8.png" /> 9<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_9.png" /> 10<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_10.png" /> 11<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_11.png" /> 12<br />\
    <img src="styles/legend/39_Martedi_13_07_20_43_17_12.png" /> 13<br />' });
var format_38_Martedi_05_30_13_06_18 = new ol.format.GeoJSON();
var features_38_Martedi_05_30_13_06_18 = format_38_Martedi_05_30_13_06_18.readFeatures(json_38_Martedi_05_30_13_06_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Martedi_05_30_13_06_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Martedi_05_30_13_06_18.addFeatures(features_38_Martedi_05_30_13_06_18);
var lyr_38_Martedi_05_30_13_06_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Martedi_05_30_13_06_18, 
                style: style_38_Martedi_05_30_13_06_18,
                popuplayertitle: '38_Martedi_05_30_13_06',
                interactive: true,
    title: '38_Martedi_05_30_13_06<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_0.png" /> 1<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_1.png" /> 2<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_2.png" /> 3<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_3.png" /> 4<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_4.png" /> 5<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_5.png" /> 6<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_6.png" /> 7<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_7.png" /> 8<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_8.png" /> 9<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_9.png" /> 10<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_10.png" /> 11<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_11.png" /> 12<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_12.png" /> 13<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_13.png" /> 14<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_14.png" /> 15<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_15.png" /> 16<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_16.png" /> 17<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_17.png" /> 18<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_18.png" /> 19<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_19.png" /> 20<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_20.png" /> 21<br />\
    <img src="styles/legend/38_Martedi_05_30_13_06_18_21.png" /> 22<br />' });
var format_37_Martedi_19_00_02_36_19 = new ol.format.GeoJSON();
var features_37_Martedi_19_00_02_36_19 = format_37_Martedi_19_00_02_36_19.readFeatures(json_37_Martedi_19_00_02_36_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Martedi_19_00_02_36_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Martedi_19_00_02_36_19.addFeatures(features_37_Martedi_19_00_02_36_19);
var lyr_37_Martedi_19_00_02_36_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Martedi_19_00_02_36_19, 
                style: style_37_Martedi_19_00_02_36_19,
                popuplayertitle: '37_Martedi_19_00_02_36',
                interactive: true,
    title: '37_Martedi_19_00_02_36<br />\
    <img src="styles/legend/37_Martedi_19_00_02_36_19_0.png" /> 1<br />' });
var format_34_Martedi_21_50_05_26_20 = new ol.format.GeoJSON();
var features_34_Martedi_21_50_05_26_20 = format_34_Martedi_21_50_05_26_20.readFeatures(json_34_Martedi_21_50_05_26_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Martedi_21_50_05_26_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Martedi_21_50_05_26_20.addFeatures(features_34_Martedi_21_50_05_26_20);
var lyr_34_Martedi_21_50_05_26_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Martedi_21_50_05_26_20, 
                style: style_34_Martedi_21_50_05_26_20,
                popuplayertitle: '34_Martedi_21_50_05_26',
                interactive: true,
    title: '34_Martedi_21_50_05_26<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_20_0.png" /> 1<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_20_1.png" /> 2<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_20_2.png" /> 3<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_20_3.png" /> 4<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_20_4.png" /> 5<br />\
    <img src="styles/legend/34_Martedi_21_50_05_26_20_5.png" /> 6<br />' });
var format_33_Martedi_09_30_15_50_21 = new ol.format.GeoJSON();
var features_33_Martedi_09_30_15_50_21 = format_33_Martedi_09_30_15_50_21.readFeatures(json_33_Martedi_09_30_15_50_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Martedi_09_30_15_50_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Martedi_09_30_15_50_21.addFeatures(features_33_Martedi_09_30_15_50_21);
var lyr_33_Martedi_09_30_15_50_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Martedi_09_30_15_50_21, 
                style: style_33_Martedi_09_30_15_50_21,
                popuplayertitle: '33_Martedi_09_30_15_50',
                interactive: true,
    title: '33_Martedi_09_30_15_50<br />\
    <img src="styles/legend/33_Martedi_09_30_15_50_21_0.png" /> 1<br />' });
var format_39_Lunedi_13_07_20_43_22 = new ol.format.GeoJSON();
var features_39_Lunedi_13_07_20_43_22 = format_39_Lunedi_13_07_20_43_22.readFeatures(json_39_Lunedi_13_07_20_43_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_39_Lunedi_13_07_20_43_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_39_Lunedi_13_07_20_43_22.addFeatures(features_39_Lunedi_13_07_20_43_22);
var lyr_39_Lunedi_13_07_20_43_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_39_Lunedi_13_07_20_43_22, 
                style: style_39_Lunedi_13_07_20_43_22,
                popuplayertitle: '39_Lunedi_13_07_20_43',
                interactive: true,
    title: '39_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_0.png" /> 1<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_1.png" /> 2<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_2.png" /> 3<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_3.png" /> 4<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_4.png" /> 5<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_5.png" /> 6<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_6.png" /> 7<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_7.png" /> 8<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_8.png" /> 9<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_9.png" /> 10<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_10.png" /> 11<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_11.png" /> 12<br />\
    <img src="styles/legend/39_Lunedi_13_07_20_43_22_12.png" /> 13<br />' });
var format_38_Lunedi_05_30_13_06_23 = new ol.format.GeoJSON();
var features_38_Lunedi_05_30_13_06_23 = format_38_Lunedi_05_30_13_06_23.readFeatures(json_38_Lunedi_05_30_13_06_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_Lunedi_05_30_13_06_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_Lunedi_05_30_13_06_23.addFeatures(features_38_Lunedi_05_30_13_06_23);
var lyr_38_Lunedi_05_30_13_06_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_Lunedi_05_30_13_06_23, 
                style: style_38_Lunedi_05_30_13_06_23,
                popuplayertitle: '38_Lunedi_05_30_13_06',
                interactive: true,
    title: '38_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_0.png" /> 1<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_1.png" /> 2<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_2.png" /> 3<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_3.png" /> 4<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_4.png" /> 5<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_5.png" /> 6<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_6.png" /> 7<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_7.png" /> 8<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_8.png" /> 9<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_9.png" /> 10<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_10.png" /> 11<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_11.png" /> 12<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_12.png" /> 13<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_13.png" /> 14<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_14.png" /> 15<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_15.png" /> 16<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_16.png" /> 17<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_17.png" /> 18<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_18.png" /> 19<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_19.png" /> 20<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_20.png" /> 21<br />\
    <img src="styles/legend/38_Lunedi_05_30_13_06_23_21.png" /> 22<br />' });
var format_37_Lunedi_19_00_02_36_24 = new ol.format.GeoJSON();
var features_37_Lunedi_19_00_02_36_24 = format_37_Lunedi_19_00_02_36_24.readFeatures(json_37_Lunedi_19_00_02_36_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_37_Lunedi_19_00_02_36_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_37_Lunedi_19_00_02_36_24.addFeatures(features_37_Lunedi_19_00_02_36_24);
var lyr_37_Lunedi_19_00_02_36_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_37_Lunedi_19_00_02_36_24, 
                style: style_37_Lunedi_19_00_02_36_24,
                popuplayertitle: '37_Lunedi_19_00_02_36',
                interactive: true,
    title: '37_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/37_Lunedi_19_00_02_36_24_0.png" /> 1<br />' });
var format_34_Lunedi_21_50_05_26_25 = new ol.format.GeoJSON();
var features_34_Lunedi_21_50_05_26_25 = format_34_Lunedi_21_50_05_26_25.readFeatures(json_34_Lunedi_21_50_05_26_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_34_Lunedi_21_50_05_26_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_34_Lunedi_21_50_05_26_25.addFeatures(features_34_Lunedi_21_50_05_26_25);
var lyr_34_Lunedi_21_50_05_26_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_34_Lunedi_21_50_05_26_25, 
                style: style_34_Lunedi_21_50_05_26_25,
                popuplayertitle: '34_Lunedi_21_50_05_26',
                interactive: true,
    title: '34_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_25_0.png" /> 1<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_25_1.png" /> 2<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_25_2.png" /> 3<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_25_3.png" /> 4<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_25_4.png" /> 5<br />\
    <img src="styles/legend/34_Lunedi_21_50_05_26_25_5.png" /> 6<br />' });
var format_33_Lunedi_09_30_15_50_26 = new ol.format.GeoJSON();
var features_33_Lunedi_09_30_15_50_26 = format_33_Lunedi_09_30_15_50_26.readFeatures(json_33_Lunedi_09_30_15_50_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_Lunedi_09_30_15_50_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_Lunedi_09_30_15_50_26.addFeatures(features_33_Lunedi_09_30_15_50_26);
var lyr_33_Lunedi_09_30_15_50_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_Lunedi_09_30_15_50_26, 
                style: style_33_Lunedi_09_30_15_50_26,
                popuplayertitle: '33_Lunedi_09_30_15_50',
                interactive: true,
    title: '33_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/33_Lunedi_09_30_15_50_26_0.png" /> 1<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_39_Lunedi_13_07_20_43_22,lyr_38_Lunedi_05_30_13_06_23,lyr_37_Lunedi_19_00_02_36_24,lyr_34_Lunedi_21_50_05_26_25,lyr_33_Lunedi_09_30_15_50_26,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_39_Martedi_13_07_20_43_17,lyr_38_Martedi_05_30_13_06_18,lyr_37_Martedi_19_00_02_36_19,lyr_34_Martedi_21_50_05_26_20,lyr_33_Martedi_09_30_15_50_21,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_39_Mercoledi_13_07_20_43_12,lyr_38_Mercoledi_05_30_13_06_13,lyr_37_Mercoledi_19_00_02_36_14,lyr_34_Mercoledi_21_50_05_26_15,lyr_33_Mercoledi_09_30_15_50_16,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_39_Giovedi_13_07_20_43_7,lyr_38_Giovedi_05_30_13_06_8,lyr_37_Giovedi_19_00_02_36_9,lyr_34_Giovedi_21_50_05_26_10,lyr_33_Giovedi_09_30_15_50_11,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_39_Venerdi_13_07_20_43_2,lyr_38_Venerdi_05_30_13_06_3,lyr_37_Venerdi_19_00_02_36_4,lyr_34_Venerdi_21_50_05_26_5,lyr_33_Venerdi_09_30_15_50_6,],
                                fold: 'close',
                                title: 'Venerdi'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Confini_Comune_Milanodissolto_1.setVisible(true);lyr_39_Venerdi_13_07_20_43_2.setVisible(false);lyr_38_Venerdi_05_30_13_06_3.setVisible(false);lyr_37_Venerdi_19_00_02_36_4.setVisible(false);lyr_34_Venerdi_21_50_05_26_5.setVisible(false);lyr_33_Venerdi_09_30_15_50_6.setVisible(false);lyr_39_Giovedi_13_07_20_43_7.setVisible(false);lyr_38_Giovedi_05_30_13_06_8.setVisible(false);lyr_37_Giovedi_19_00_02_36_9.setVisible(false);lyr_34_Giovedi_21_50_05_26_10.setVisible(false);lyr_33_Giovedi_09_30_15_50_11.setVisible(false);lyr_39_Mercoledi_13_07_20_43_12.setVisible(false);lyr_38_Mercoledi_05_30_13_06_13.setVisible(false);lyr_37_Mercoledi_19_00_02_36_14.setVisible(false);lyr_34_Mercoledi_21_50_05_26_15.setVisible(false);lyr_33_Mercoledi_09_30_15_50_16.setVisible(false);lyr_39_Martedi_13_07_20_43_17.setVisible(false);lyr_38_Martedi_05_30_13_06_18.setVisible(false);lyr_37_Martedi_19_00_02_36_19.setVisible(false);lyr_34_Martedi_21_50_05_26_20.setVisible(false);lyr_33_Martedi_09_30_15_50_21.setVisible(false);lyr_39_Lunedi_13_07_20_43_22.setVisible(false);lyr_38_Lunedi_05_30_13_06_23.setVisible(true);lyr_37_Lunedi_19_00_02_36_24.setVisible(false);lyr_34_Lunedi_21_50_05_26_25.setVisible(false);lyr_33_Lunedi_09_30_15_50_26.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Confini_Comune_Milanodissolto_1,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_Confini_Comune_Milanodissolto_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', });
lyr_39_Venerdi_13_07_20_43_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Venerdi_05_30_13_06_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Venerdi_19_00_02_36_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Venerdi_21_50_05_26_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Venerdi_09_30_15_50_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Giovedi_13_07_20_43_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Giovedi_05_30_13_06_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Giovedi_19_00_02_36_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Giovedi_21_50_05_26_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Giovedi_09_30_15_50_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Mercoledi_13_07_20_43_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Mercoledi_05_30_13_06_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Mercoledi_19_00_02_36_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Mercoledi_21_50_05_26_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Mercoledi_09_30_15_50_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Martedi_13_07_20_43_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Martedi_05_30_13_06_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Martedi_19_00_02_36_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Martedi_21_50_05_26_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Martedi_09_30_15_50_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_39_Lunedi_13_07_20_43_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_38_Lunedi_05_30_13_06_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_37_Lunedi_19_00_02_36_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_34_Lunedi_21_50_05_26_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_33_Lunedi_09_30_15_50_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_39_Venerdi_13_07_20_43_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Venerdi_05_30_13_06_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Venerdi_19_00_02_36_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Venerdi_21_50_05_26_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Venerdi_09_30_15_50_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Giovedi_13_07_20_43_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Giovedi_05_30_13_06_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Giovedi_19_00_02_36_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Giovedi_21_50_05_26_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Giovedi_09_30_15_50_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Mercoledi_13_07_20_43_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Mercoledi_05_30_13_06_13.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Mercoledi_19_00_02_36_14.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Mercoledi_21_50_05_26_15.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Mercoledi_09_30_15_50_16.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Martedi_13_07_20_43_17.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Martedi_05_30_13_06_18.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Martedi_19_00_02_36_19.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Martedi_21_50_05_26_20.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Martedi_09_30_15_50_21.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_39_Lunedi_13_07_20_43_22.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_38_Lunedi_05_30_13_06_23.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_37_Lunedi_19_00_02_36_24.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_34_Lunedi_21_50_05_26_25.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_33_Lunedi_09_30_15_50_26.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldLabels', {'fid': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETRO': 'inline label - always visible', });
lyr_39_Venerdi_13_07_20_43_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Venerdi_05_30_13_06_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Venerdi_19_00_02_36_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Venerdi_21_50_05_26_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Venerdi_09_30_15_50_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Giovedi_13_07_20_43_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Giovedi_05_30_13_06_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Giovedi_19_00_02_36_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Giovedi_21_50_05_26_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Giovedi_09_30_15_50_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Mercoledi_13_07_20_43_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Mercoledi_05_30_13_06_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Mercoledi_19_00_02_36_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Mercoledi_21_50_05_26_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Mercoledi_09_30_15_50_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Martedi_13_07_20_43_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Martedi_05_30_13_06_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Martedi_19_00_02_36_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Martedi_21_50_05_26_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Martedi_09_30_15_50_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_39_Lunedi_13_07_20_43_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_38_Lunedi_05_30_13_06_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_37_Lunedi_19_00_02_36_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_34_Lunedi_21_50_05_26_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Lunedi_09_30_15_50_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_33_Lunedi_09_30_15_50_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});