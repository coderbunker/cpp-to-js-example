#include "../store.h"

static Store* store;

extern "C" {
    void store_value(int v) {
        if(!store) {
            store = new Store();
        }
        store->set(v);
    }
    int retrieve_value() {
        if(!store) {
            store = new Store();
        }
        return store->get();
    }
}