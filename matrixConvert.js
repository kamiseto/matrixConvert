var matrixConvert ={
'isObj' : function(obj){return typeof obj == 'object' ? true : false},
'hasMatrix' : function(obj){return obj.hasOwnProperty ('matrix') ? true : false},
'isMirrorX' : function(obj){
				if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
				return obj.matrix.mValueA > 0 ? false : true;
				},
'isMirrorY' :function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return obj.matrix.mValueD < 0 ? false : (this.getRotation(obj) < -90 ? true : false);
                },
'getAllReal' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return {'hs' : this.getHorizontalScaleReal(obj),
                			'vs' : this.getVerticalScaleReal(obj),
                			'rotation' : this.getRotation(obj),
                		}	
              },
'getAll' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return {'hs' : this.getHorizontalScale(obj),
                			'vs' : this.getVerticalScale(obj),
                			'rotation' : this.getRotation(obj),
                			'tilt' : this.getTilt(obj)
                		}	
                },
'getScale' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return {'hs' : this.getHorizontalScale(obj),
                			'vs' : this.getVerticalScale(obj)
                		}
                },
'getHorizontalScaleReal' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return Math.sqrt(Math.pow(obj.matrix.mValueA,2) + Math.pow(obj.matrix.mValueB,2));
},
'getHorizontalScale' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return Math.round(this.getHorizontalScaleReal(obj)*100000)/1000;
                },
'getVerticalScaleReal' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return Math.sqrt(Math.pow(obj.matrix.mValueC,2) + Math.pow(obj.matrix.mValueD,2));
},
'getVerticalScale' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return Math.round(this.getVerticalScaleReal(obj)*100000)/1000;
                },
'getRotationX' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return Math.atan2(obj.matrix.mValueB, obj.matrix.mValueA)*180/Math.PI;
                },
'getRotationY' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                return Math.atan2(obj.matrix.mValueC, obj.matrix.mValueD)*180/Math.PI;
                },
'getRotation' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                var r = Math.round(this.getRotationX(obj)*1000)/1000;
                //var r = Math.round(this.getRotationY(obj)*1000)/1000;
                if(obj.constructor.name == 'PlacedItem')return r;
                if(obj.constructor.name == 'TextFrame' || obj.constructor.name == 'RasterItem')return  r;
                if(obj.constructor.name == 'PatternColor' || obj.constructor.name == 'GradientColor')return r*-1;
                return false;
                },
'getTilt' : function(obj){
                if(!this.isObj(obj) || !this.hasMatrix(obj))return false;
                    var rY = Math.round(this.getRotationY(obj)*1000)/1000;
                    var rX = Math.round(this.getRotationX(obj)*1000)/1000;
                    var total = rX + rY;
                    var tilt = total > 0 ? total - 180 : total + 180;
                    return tilt;
                }
}

