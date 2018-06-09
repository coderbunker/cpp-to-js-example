all: entry.cpp ../store.cpp
	em++ \
		-s MODULARIZE=1 -s 'EXPORT_NAME="storejs"' \
		-s "EXPORTED_FUNCTIONS=['_store_value', '_retrieve_value']" \
		entry.cpp ../store.cpp \
		-o store.js