package pal;

import static pal.Strings.*;
import org.junit.Test;
import static org.junit.Assert.*;

public class StringsTest {
    @Test
    public void testTruncate() {
        assertEquals("abc", truncate("abc", 3));
        assertEquals("ab?", truncate("abc", 3, "?"));
    }
}
