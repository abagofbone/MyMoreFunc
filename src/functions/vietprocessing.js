// Transcrypt'ed from Python, 2021-10-02 22:05:09
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = '__main__';
export var char = 'àảãáạăằẳẵắặâầẩẫấậòỏõóọôồổỗốộơờởỡớợèẻẽéẹêềểễếệùủũúụưừửữứựìỉĩíịỳỷỹýỵđ';
export var kdau = 'aAăĂâÂbBcCdDđĐeEêÊfFgGhHiIjJkKlLmMnNoOôÔơƠpPqQrRsStTuUưƯvVwWxXyYzZ';
export var cdau = 'aàảãáạăằẳẵắặâầẩẫấậeèẻẽéẹêềểễếệiìỉĩíịoòỏõóọôồổỗốộơờởỡớợuùủũúụưừửữứựyỳỷỹýỵAÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬEÈẺẼÉẸÊỀỂỄẾỆIÌỈĨÍỊOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢUÙỦŨÚỤƯỪỬỮỨỰYỲỶỸÝỴ';
export var BoThanhDieu = function (a) {
	var Cdau = 'aàảãáạăằẳẵắặâầẩẫấậeèẻẽéẹêềểễếệiìỉĩíịoòỏõóọôồổỗốộơờởỡớợuùủũúụưừửữứựyỳỷỹýỵAÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬEÈẺẼÉẸÊỀỂỄẾỆIÌỈĨÍỊOÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢUÙỦŨÚỤƯỪỬỮỨỰYỲỶỸÝỴ';
	a += '';
	var i = Cdau.find (a);
	if (i == -(1)) {
		return a;
	}
	return Cdau [i - __mod__ (i, 6)];
};
export var BoDau = function (a) {
	var Char = 'àảãáạăằẳẵắặâầẩẫấậòỏõóọôồổỗốộơờởỡớợèẻẽéẹêềểễếệùủũúụưừửữứựìỉĩíịỳỷỹýỵđ';
	var kqua = 'aAoOeEuUiIyYdD';
	a += '';
	var lower = false;
	var b = a.lower ();
	if (a == b) {
		var lower = true;
	}
	else {
		var lower = false;
	}
	var i = Char.find (b);
	if (i == -(1)) {
		return a;
	}
	if (i <= 16) {
		return kqua [(0 + 1) - lower];
	}
	if (i <= 33) {
		return kqua [(2 + 1) - lower];
	}
	if (i <= 44) {
		return kqua [(4 + 1) - lower];
	}
	if (i <= 55) {
		return kqua [(6 + 1) - lower];
	}
	if (i <= 60) {
		return kqua [(8 + 1) - lower];
	}
	if (i <= 65) {
		return kqua [(10 + 1) - lower];
	}
	if (i <= 66) {
		return kqua [(12 + 1) - lower];
	}
};
export var SoSanh = function (a, b) {
	var toanbo = '_0123456789aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ';
	a += '';
	b += '';
	var aa = '';
	var bb = '';
	for (var i = 0; i < len (a); i++) {
		var k = toanbo.find (a [i]);
		if (__in__ (k, range (256))) {
			aa += chr (k);
		}
	}
	for (var i = 0; i < len (b); i++) {
		var k = toanbo.find (b [i]);
		if (__in__ (k, range (256))) {
			bb += chr (k);
		}
	}
	if (aa == bb) {
		return 0;
	}
	if (aa < bb) {
		return 1;
	}
	else {
		return -(1);
	}
};

//# sourceMappingURL=vietprocessing.map