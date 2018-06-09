#include <iostream>
#include "store.h"

using namespace std;

int main() {
	Store store;
	store.set(100);
	cout << store.get() << endl;
}
