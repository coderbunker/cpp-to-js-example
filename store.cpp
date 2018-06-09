#include "store.h"

Store::Store() {
	value = 42;
}

void Store::set(int v) {
	value = v;
}

int Store::get() {
	return value;
}
